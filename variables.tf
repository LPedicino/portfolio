variable "aws_region" {
  description = "Región de AWS donde se desplegará la infraestructura"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "Tipo de instancia EC2"
  type        = string
  default     = "t3.micro"
}

variable "key_name" {
  description = "Nombre de la clave SSH en AWS"
  type        = string
  default     = "portfolio-ssh-key"
}

variable "ami_id" {
  description = "ID de la AMI de Ubuntu"
  type        = string
  default     = "ami-053b0d53c279acc90" # La de Ubuntu 22.04 LTS que usamos
}