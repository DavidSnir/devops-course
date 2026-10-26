data "aws_iam_policy_document" "tfc_assume_role" {
  statement {
    effect = "Allow"

    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.tfc.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "app.terraform.io:aud"
      values   = ["aws.workload.identity"]
    }

    condition {
      test     = "StringLike"
      variable = "app.terraform.io:sub"
      values = [
        "organization:${var.tfc_organization}:project:${var.tfc_project}:workspace:${var.tfc_workspace}:run_phase:*"
      ]
    }
  }
}

resource "aws_iam_openid_connect_provider" "tfc" {
  url = "https://app.terraform.io"

  client_id_list = ["aws.workload.identity"]
}

resource "aws_iam_role" "tfc" {
  name               = var.role_name
  assume_role_policy = data.aws_iam_policy_document.tfc_assume_role.json
}

resource "aws_iam_role_policy_attachment" "tfc" {
  for_each = var.managed_policy_arns

  role       = aws_iam_role.tfc.name
  policy_arn = each.value
}
