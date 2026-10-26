terraform {
  required_version = "~> 1.7"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-west-1"
}

provider "aws" {
  region = "us-east-1"
  alias  = "us-east"
}

resource "aws_s3_bucket" "eu_west_1" {
  bucket = "david-snir-eu-west-1-terraform-lab-938472"
}

resource "aws_s3_bucket" "us_east_1" {
  bucket   = "david-snir-us-east-1-terraform-lab-938472"
  provider = aws.us-east
}
