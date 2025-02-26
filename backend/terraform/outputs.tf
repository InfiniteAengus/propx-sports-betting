output "graphql_api_url" {
  value = aws_ecs_service.graphql_service.id
}

output "database_address" {
  value = aws_db_instance.postgres.address
}
