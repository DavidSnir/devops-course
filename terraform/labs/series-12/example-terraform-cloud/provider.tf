terraform {
  cloud {
    organization = "davidsnir"

    workspaces {
      name = "terraform-vcs"
    }
  }

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