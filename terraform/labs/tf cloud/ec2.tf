data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-2023*-x86_64"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_instance" "connection_test" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = var.instance_type

  tags = {
    Name = "terraform-cloud-connection-test"
  }
}

output "ec2_connection_test_id" {
  description = "ID of the EC2 instance created to validate AWS connectivity."
  value       = aws_instance.connection_test.id
}

output "ec2_connection_test_public_ip" {
  description = "Public IP assigned to the AWS connectivity test instance."
  value       = aws_instance.connection_test.public_ip
}
