# 📊 El output para ver la IP automatica en consola
output "server_public_ip" {
  value       = aws_instance.portfolio_server.public_ip
  description = "La IP publica del servidor"
}