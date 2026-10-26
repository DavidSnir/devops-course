output "tfc_oidc_provider_arn" {
  description = "ARN of the Terraform Cloud OIDC provider in AWS IAM."
  value       = aws_iam_openid_connect_provider.tfc.arn
}

output "tfc_role_arn" {
  description = "Set this ARN as TFC_AWS_RUN_ROLE_ARN in the Terraform Cloud workspace."
  value       = aws_iam_role.tfc.arn
}
