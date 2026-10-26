# Stage 7 — GitOps with ArgoCD + Immutable Image Tags

## Goal
Replace manual `kubectl apply` with a GitOps workflow and switch from `:latest`
to immutable image tags.  
ArgoCD watches `FifaApp-infra/k8s/` in git. When you update an image tag and push,
ArgoCD applies the change. Stage 8 will automate the tag update — here you do it manually
so you understand what the automation is doing.

---

## Why not `:latest`?

| | `:latest` | `:abc123f` (SHA tag) |
|--|--|--|
| Rollback | Rebuild old image | `git revert` the tag commit |
| What's running? | Unknown | Traceable to exact commit |
| Concurrent deploys | Race conditions | Each tag is immutable |
| ArgoCD change detection | No diff (tag didn't change) | Detects the new tag value |

With `:latest`, ArgoCD sees no manifest change when you push a new image — the tag is still
`latest` in the YAML. SHA tags fix this: every image push produces a new tag, which changes
the manifest, which ArgoCD detects and deploys.

---

## What changes

| | Stage 6 | Stage 7 |
|--|--|--|
| Deploy trigger | `kubectl apply -R -f k8s/` | `git push` to FifaApp-infra |
| Manifest location | Local workspace | `FifaApp-infra/k8s/` |
| Image tag | `:latest` | `:abc123f` (git SHA) |
| Rollback | Redeploy manually | `git revert` + push |
| Drift protection | None | ArgoCD selfHeal |

---

## Step 1 — Add ArgoCD to Terraform

This step installs ArgoCD and wires it into the shared ALB — all managed by Terraform, no manual `kubectl` required. The app ingress already has the `group.name: fifaapp` annotation from Stage 6; `argocd.tf` joins that same group at `/argocd`.

### Update terraform/providers.tf

Add the `helm` and `kubernetes` providers. Both use the same EKS auth token:

```hcl
terraform {
  required_version = ">= 1.7"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }
}

provider "aws" {
  region = var.region
}

data "aws_eks_cluster_auth" "this" {
  name = module.eks.cluster_name
}

provider "helm" {
  kubernetes {
    host                   = module.eks.cluster_endpoint
    cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)
    token                  = data.aws_eks_cluster_auth.this.token
  }
}

provider "kubernetes" {
  host                   = module.eks.cluster_endpoint
  cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)
  token                  = data.aws_eks_cluster_auth.this.token
}
```

### Create terraform/argocd.tf

The Helm release installs ArgoCD. The `kubernetes_ingress_v1` resource creates the ArgoCD ingress in the same IngressGroup as the app — so both share one ALB.

> **Why not use Helm's built-in ingress?** The ArgoCD Helm chart's ingress template fixes the path to `/` and requires a hostname — it can't be configured for path-based routing at `/argocd`. Managing the ingress with the `kubernetes` provider gives us exact control.

```hcl
resource "helm_release" "argocd" {
  name             = "argocd"
  repository       = "https://argoproj.github.io/argo-helm"
  chart            = "argo-cd"
  namespace        = "argocd"
  create_namespace = true
  version          = "7.7.11"

  depends_on = [module.eks]

  values = [
    <<-EOT
    configs:
      params:
        server.insecure: "true"
        server.rootpath: "/argocd"
    EOT
  ]
}

resource "kubernetes_ingress_v1" "argocd" {
  metadata {
    name      = "argocd-ingress"
    namespace = "argocd"
    annotations = {
      "alb.ingress.kubernetes.io/scheme"      = "internet-facing"
      "alb.ingress.kubernetes.io/target-type" = "ip"
      "alb.ingress.kubernetes.io/group.name"  = "fifaapp"
      "alb.ingress.kubernetes.io/group.order" = "10"
    }
  }

  spec {
    ingress_class_name = "alb"

    rule {
      http {
        path {
          path      = "/argocd"
          path_type = "Prefix"
          backend {
            service {
              name = "argocd-server"
              port { number = 80 }
            }
          }
        }
      }
    }
  }

  depends_on = [helm_release.argocd]
}
```

### Apply

> Same VCS restriction as Stage 6 — disconnect VCS in TFC workspace settings, apply locally, reconnect:

```bash
cd ~/DevOps/FifaApp-infra/terraform
terraform init   # picks up the new helm + kubernetes providers
terraform apply -var="tfc_organization=<YOUR_TFC_ORG>"
```

---

## Step 2 — Build and push images with a SHA tag

Instead of `:latest`, tag images with the git commit SHA of the app repo:

```bash
cd ~/DevOps/FifaApp-infra/terraform
ECR_REGISTRY=$(terraform output -raw ecr_registry)
BACKEND_URI=$(terraform output -raw ecr_backend_uri)
FRONTEND_URI=$(terraform output -raw ecr_frontend_uri)
REGION=us-east-1

aws ecr get-login-password --region $REGION | \
  docker login --username AWS --password-stdin $ECR_REGISTRY

# Use the short git SHA as the image tag
cd ~/DevOps/FifaApp/FifaApp-backend
BACKEND_TAG=$(git rev-parse --short HEAD)
docker build -t $BACKEND_URI:$BACKEND_TAG .
docker push $BACKEND_URI:$BACKEND_TAG
echo "Backend tag: $BACKEND_TAG"

cd ~/DevOps/FifaApp/FifaApp-frontend
FRONTEND_TAG=$(git rev-parse --short HEAD)
docker build -t $FRONTEND_URI:$FRONTEND_TAG .
docker push $FRONTEND_URI:$FRONTEND_TAG
echo "Frontend tag: $FRONTEND_TAG"
```

> In Stage 8, GitHub Actions runs these commands automatically on every push.
> Here you're doing it once by hand to understand what CI will automate.

---

## Step 3 — Move manifests into FifaApp-infra

`FifaApp-infra/k8s/` already has `ingress.yaml` from Stage 6. Extend it with the remaining manifests:

```
FifaApp-infra/
└── k8s/
    ├── namespace.yaml
    ├── backend/
    │   ├── deployment.yaml    ← image tag updated to SHA
    │   └── service.yaml
    ├── frontend/
    │   ├── configmap.yaml
    │   ├── deployment.yaml    ← image tag updated to SHA
    │   └── service.yaml
    └── ingress.yaml           ← already exists
```

> **⚠️ Do not put `secret.yaml` in FifaApp-infra.**  
> ArgoCD with `prune: true` only deletes resources it previously created (the ones with ArgoCD tracking annotations). A secret applied directly with `kubectl` won't have those annotations, so ArgoCD will leave it alone. Never commit real credentials to git.

Apply the real secret directly to the cluster first:

```bash
MONGO_URI="<your-mongodb-uri>"   # from Stage 4
kubectl create secret generic fifaapp-secret \
  -n fifaapp \
  --from-literal=MONGO_URI="$MONGO_URI" \
  --dry-run=client -o yaml | kubectl apply -f -
```

Then copy the remaining manifests (without secret.yaml):

```bash
cp /home/lirone/DevOps/FifaApp/k8s/backend/deployment.yaml ~/DevOps/FifaApp-infra/k8s/backend/
cp /home/lirone/DevOps/FifaApp/k8s/backend/service.yaml    ~/DevOps/FifaApp-infra/k8s/backend/
cp -r ~/DevOps/FifaApp/k8s/frontend ~/DevOps/FifaApp-infra/k8s/
cp ~/DevOps/FifaApp/k8s/namespace.yaml ~/DevOps/FifaApp-infra/k8s/
```

Update `k8s/backend/deployment.yaml` with the SHA tag you just pushed:

```yaml
image: <ECR_BACKEND_URI>:$BACKEND_TAG   # e.g. 123456789.dkr.ecr.us-east-1.amazonaws.com/fifaapp-backend:a1b2c3d
imagePullPolicy: Always
```

Same for `k8s/frontend/deployment.yaml` using `$FRONTEND_TAG`.

Commit and push:

```bash
cd ~/DevOps/FifaApp-infra
git add k8s/
git commit -m "Deploy backend:$BACKEND_TAG frontend:$FRONTEND_TAG"
git push
```

> **This git commit is the deployment record.** The commit message tells you exactly
> which image version was deployed and when.

---

## Step 4 — Create the ArgoCD Application

Create `argocd-app.yaml` (apply once, then you can discard the file):

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: fifaapp
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/<your-org>/FifaApp-infra
    targetRevision: master
    path: k8s
    directory:
      recurse: true   # required — without this ArgoCD only reads the root k8s/ files, not backend/ frontend/ subdirs
  destination:
    server: https://kubernetes.default.svc
    namespace: fifaapp
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
      - CreateNamespace=true
```

Apply it:

```bash
kubectl apply -f argocd-app.yaml
```

> **Private repo?** Configure git credentials first:
> ```bash
> kubectl create secret generic argocd-repo-creds \
>   -n argocd \
>   --from-literal=url=https://github.com/<your-org>/FifaApp-infra \
>   --from-literal=username=<github-username> \
>   --from-literal=password=<github-pat>
> kubectl label secret argocd-repo-creds -n argocd \
>   argocd.argoproj.io/secret-type=repository
> ```

---

## Step 5 — Verify ArgoCD synced the app

After pushing in Step 3, ArgoCD detects the git change and applies it automatically (within ~3 minutes). Check status:

```bash
kubectl get application fifaapp -n argocd
kubectl get pods -n fifaapp
kubectl get ingress -n fifaapp
```

You should see the `fifaapp` Application with **Synced** / **Healthy** status. Access the UI using the **ArgoCD Dashboard** section below — run the `kubectl patch` command there to get a public URL.

---

## Step 6 — Verify the full GitOps loop

Make a code change, build a new image, and update the manifest manually:

```bash
BACKEND_URI=$(cd ~/DevOps/FifaApp-infra/terraform && terraform output -raw ecr_backend_uri)

# 1. Make a code change in FifaApp-backend, commit and push
cd ~/DevOps/FifaApp/FifaApp-backend
# ... edit something ...
git add . && git commit -m "Fix: improve player validation"
git push

# 2. Build and push the new image with the new SHA
NEW_TAG=$(git rev-parse --short HEAD)
docker build -t $BACKEND_URI:$NEW_TAG .
docker push $BACKEND_URI:$NEW_TAG

# 3. Update the manifest in FifaApp-infra
cd ~/DevOps/FifaApp-infra
sed -i "s|$BACKEND_URI:.*|$BACKEND_URI:$NEW_TAG|" k8s/backend/deployment.yaml
git add k8s/backend/deployment.yaml
git commit -m "Deploy backend:$NEW_TAG"
git push

# 4. Watch ArgoCD apply it — no kubectl needed
kubectl rollout status deployment/fifaapp-backend -n fifaapp
```

This 4-step sequence is exactly what Stage 8 (GitHub Actions) automates.

---

## Key concept: selfHeal

Try breaking the GitOps contract:
```bash
BACKEND_URI=$(cd ~/DevOps/FifaApp-infra/terraform && terraform output -raw ecr_backend_uri)
kubectl set image deployment/fifaapp-backend backend=$BACKEND_URI:latest -n fifaapp
```

Within ~30 seconds ArgoCD reverts the image back to the SHA tag in git. **Git always wins.**

---

## ArgoCD Dashboard

After `terraform apply`, ArgoCD and the app share one ALB. Get the URL:

```bash
kubectl get ingress argocd-ingress -n argocd \
  -o jsonpath='{.status.loadBalancer.ingress[0].hostname}' && echo
```

Open `http://<hostname>/argocd` in your browser.

| Field | Value |
|---|---|
| Username | `admin` |
| Password | run the command below |

```bash
kubectl -n argocd get secret argocd-initial-admin-secret \
  -o jsonpath="{.data.password}" | base64 -d && echo
```

---

## Stuck? Check the solution
```
solutions/07-argocd/
```

**Next:** Automate steps 2–3 of the loop above with GitHub Actions (Stage 8)
