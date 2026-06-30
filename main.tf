# 🔑 Registramos tu clave publica en AWS
resource "aws_key_pair" "portfolio_key" {
  key_name   = var.key_name
  public_key = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIMWwuBT6R9ist9kJX0x9ctfh1AaypZL4s3emqj1B0XAt leako@Lea"
}

# 🛡️ Grupo de seguridad para habilitar los accesos
resource "aws_security_group" "portfolio_sg" {
  name        = "portfolio-traffic-sg"
  description = "Permitir SSH y trafico web"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# 🖥️ Instancia del Servidor EC2 usando variables
resource "aws_instance" "portfolio_server" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = aws_key_pair.portfolio_key.key_name

  vpc_security_group_ids = [aws_security_group.portfolio_sg.id]

  tags = {
    Name = "Portfolio-Prod"
  }
}

