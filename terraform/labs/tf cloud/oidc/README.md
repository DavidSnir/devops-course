# Terraform Cloud OIDC to AWS

This lab creates the AWS IAM OIDC provider and IAM role needed for Terraform Cloud dynamic AWS credentials.

## Configure

Copy the example variables file and update it with your Terraform Cloud details:

```sh
cp terraform.tfvars.example terraform.tfvars
```

Required values:

- `tfc_organization`: Terraform Cloud organization name.
- `tfc_project`: Terraform Cloud project name.
- `tfc_workspace`: Terraform Cloud workspace name.
- `managed_policy_arns`: IAM policies to attach to the role. Replace `AdministratorAccess` with least privilege for real use.

## Create The AWS Role

Do not apply until you are ready. To preview only:

```sh
terraform init
terraform plan
```

When eventually applied, set these Terraform Cloud workspace environment variables:

- `TFC_AWS_PROVIDER_AUTH=true`
- `TFC_AWS_RUN_ROLE_ARN=<tfc_role_arn output>`

Terraform Cloud will then use OIDC to assume the AWS role during runs.
