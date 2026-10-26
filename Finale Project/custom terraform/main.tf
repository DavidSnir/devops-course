terraform {
  required_version = ">= 1.4.0"
}

variable "aws_profile" {
  type    = string
  default = "devops-course-final-project-user"
}

variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "cluster_name" {
  type    = string
  default = "sports-store-cluster"
}

variable "existing_ip" {
  type    = string
  default = "147.235.193.59/32"
}

variable "temporary_ip" {
  type    = string
  default = "77.137.66.96/32"
}

variable "temporary_viewer_arn" {
  type    = string
  default = "arn:aws:iam::386689380284:user/david-dev"
}

resource "terraform_data" "temporary_eks_access" {
  input = {
    profile      = var.aws_profile
    region       = var.aws_region
    cluster_name = var.cluster_name
    existing_ip  = var.existing_ip
    temporary_ip = var.temporary_ip
  }

  provisioner "local-exec" {
    interpreter = ["/bin/bash", "-c"]

    command = <<-EOT
      current=$(aws eks describe-cluster --name "${self.input.cluster_name}" --region "${self.input.region}" --profile "${self.input.profile}" --query 'cluster.resourcesVpcConfig.publicAccessCidrs' --output text)
      if [[ "$current" != *"${self.input.existing_ip}"* || "$current" != *"${self.input.temporary_ip}"* ]]; then
        aws eks update-cluster-config \
          --name "${self.input.cluster_name}" \
          --region "${self.input.region}" \
          --profile "${self.input.profile}" \
          --resources-vpc-config endpointPublicAccess=true,endpointPrivateAccess=true,publicAccessCidrs="${self.input.existing_ip}","${self.input.temporary_ip}" \
          --query 'update.id' \
          --output text
      fi
    EOT
  }

  provisioner "local-exec" {
    when = destroy

    interpreter = ["/bin/bash", "-c"]

    command = <<-EOT
      current=$(aws eks describe-cluster --name "${self.input.cluster_name}" --region "${self.input.region}" --profile "${self.input.profile}" --query 'cluster.resourcesVpcConfig.publicAccessCidrs' --output text)
      if [[ "$current" != "${self.input.existing_ip}" ]]; then
        aws eks update-cluster-config \
          --name "${self.input.cluster_name}" \
          --region "${self.input.region}" \
          --profile "${self.input.profile}" \
          --resources-vpc-config endpointPublicAccess=true,endpointPrivateAccess=true,publicAccessCidrs="${self.input.existing_ip}" \
          --query 'update.id' \
          --output text
      fi
    EOT
  }
}

resource "terraform_data" "temporary_eks_view_access" {
  depends_on = [terraform_data.temporary_eks_access]

  triggers_replace = [
    var.temporary_viewer_arn,
    "arn:aws:eks::aws:cluster-access-policy/AmazonEKSClusterAdminPolicy",
  ]

  input = {
    profile       = var.aws_profile
    region        = var.aws_region
    cluster_name  = var.cluster_name
    principal_arn = var.temporary_viewer_arn
    policy_arn    = "arn:aws:eks::aws:cluster-access-policy/AmazonEKSClusterAdminPolicy"
  }

  provisioner "local-exec" {
    interpreter = ["/bin/bash", "-c"]

    command = <<-EOT
      if ! aws eks describe-access-entry --cluster-name "${self.input.cluster_name}" --principal-arn "${self.input.principal_arn}" --region "${self.input.region}" --profile "${self.input.profile}" >/dev/null 2>&1; then
        aws eks create-access-entry --cluster-name "${self.input.cluster_name}" --principal-arn "${self.input.principal_arn}" --region "${self.input.region}" --profile "${self.input.profile}" >/dev/null
      fi
      associated=$(aws eks list-associated-access-policies --cluster-name "${self.input.cluster_name}" --principal-arn "${self.input.principal_arn}" --region "${self.input.region}" --profile "${self.input.profile}" --query "contains(associatedAccessPolicies[].policyArn, '${self.input.policy_arn}')" --output text)
      if [[ "$associated" != "True" ]]; then
        aws eks associate-access-policy --cluster-name "${self.input.cluster_name}" --principal-arn "${self.input.principal_arn}" --policy-arn "${self.input.policy_arn}" --access-scope type=cluster --region "${self.input.region}" --profile "${self.input.profile}" >/dev/null
      fi
    EOT
  }

  provisioner "local-exec" {
    when        = destroy
    interpreter = ["/bin/bash", "-c"]

    command = <<-EOT
      if aws eks describe-access-entry --cluster-name "${self.input.cluster_name}" --principal-arn "${self.input.principal_arn}" --region "${self.input.region}" --profile "${self.input.profile}" >/dev/null 2>&1; then
        aws eks disassociate-access-policy --cluster-name "${self.input.cluster_name}" --principal-arn "${self.input.principal_arn}" --policy-arn "${self.input.policy_arn}" --region "${self.input.region}" --profile "${self.input.profile}" >/dev/null || true
        aws eks delete-access-entry --cluster-name "${self.input.cluster_name}" --principal-arn "${self.input.principal_arn}" --region "${self.input.region}" --profile "${self.input.profile}" >/dev/null
      fi
    EOT
  }
}
