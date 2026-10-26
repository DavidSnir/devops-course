terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "eu-west-1"
}

resource "aws_vpc" "console_managed" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "console-managed"
    Env  = "Prod"
  }
}

output "console_managed_vpc_id" {
  value = aws_vpc.console_managed.id
}

output "console_managed_vpc_cidr_block" {
  value = aws_vpc.console_managed.cidr_block
}
