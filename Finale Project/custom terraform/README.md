# Temporary EKS Access

This local Terraform configuration temporarily adds `77.137.66.96/32` to the
public API allowlist for `sports-store-cluster`. It preserves the existing
`147.235.193.59/32` entry.

It also grants `arn:aws:iam::386689380284:user/david-dev` the AWS-managed
`AmazonEKSClusterAdminPolicy` at cluster scope for the recovery work.

It intentionally uses the AWS CLI instead of importing the EKS cluster into a
second Terraform state, which would conflict with the main Terraform Cloud
workspace.

## Apply

```bash
terraform init
terraform apply
```

## Remove today's override

```bash
terraform destroy
```

Destroy restores the allowlist to only `147.235.193.59/32`. A future apply from
the main Terraform Cloud workspace may also overwrite this temporary setting.

## Change record

- 2026-08-04: Added temporary EKS API access for `77.137.66.96/32`.
- Original endpoint entry retained: `147.235.193.59/32`.
- Added temporary cluster-admin EKS access for the `david-dev` IAM user.
- No worker capacity or application resources are changed by this configuration.
