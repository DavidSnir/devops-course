output "s3_bucket_name" {
  value = aws_s3_bucket.website.id
}

output "s3_bucket_arn" {
  value = aws_s3_bucket.website.arn
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.website.id
}

output "cloudfront_distribution_arn" {
  value = aws_cloudfront_distribution.website.arn
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.website.domain_name
}

output "website_url" {
  value = "https://${aws_cloudfront_distribution.website.domain_name}"
}

output "aws_region" {
  value = var.aws_region
}

output "github_actions_role_arn" {
  value = aws_iam_role.github_actions.arn
}
