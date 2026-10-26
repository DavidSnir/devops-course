variable "aws_region" {
  description = "AWS region used by the AWS provider. IAM resources are global, but the provider still requires a region."
  type        = string
  default     = "us-east-1"
}

variable "tfc_organization" {
  description = "Terraform Cloud organization name allowed to assume the AWS role."
  type        = string
}

variable "tfc_project" {
  description = "Terraform Cloud project name allowed to assume the AWS role."
  type        = string
}

variable "tfc_workspace" {
  description = "Terraform Cloud workspace name allowed to assume the AWS role."
  type        = string
}

variable "role_name" {
  description = "Name of the AWS IAM role Terraform Cloud will assume."
  type        = string
  default     = "terraform-cloud-oidc"
}

variable "managed_policy_arns" {
  description = "AWS managed or customer managed policy ARNs to attach to the Terraform Cloud role."
  type        = set(string)
  default     = ["arn:aws:iam::aws:policy/AdministratorAccess"]
}
