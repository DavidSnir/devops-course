module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 21.0"

  name               = var.cluster_name
  kubernetes_version = var.cluster_version

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  endpoint_public_access = true

  eks_managed_node_groups = {
    default = {
      instance_types = [var.node_instance_type]
      min_size       = 1
      max_size       = 4
      desired_size   = var.desired_nodes
    }
  }

  addons = {
    coredns                = {}
    kube-proxy             = { before_compute = true }
    vpc-cni                = { before_compute = true }
    eks-pod-identity-agent = {}
  }

  enable_cluster_creator_admin_permissions = true
  enable_irsa                              = true

  tags = { Project = "FifaApp" }
}
