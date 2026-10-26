variable "aws_region" {
  description = "AWS region where the test EC2 instance will be created."
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "Instance type for the temporary AWS connectivity test instance."
  type        = string
  default     = "t3.micro"
}
