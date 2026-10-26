variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "eu-central-1"
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "static-site"
}

variable "github_repository" {
  description = "GitHub repository allowed to assume the deployment role"
  type        = string
  default     = "DavidSnir/Mid-Lab-Terraform-and-CICD"
}
