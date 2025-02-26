terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  required_version = ">= 1.0"
}

provider "aws" {
  region = var.aws_region
}

resource "aws_db_instance" "postgres" {
  identifier             = "graphql-db"
  engine                = "postgres"
  instance_class        = "db.t3.micro"
  allocated_storage     = 20
  username             = var.db_user
  password             = var.db_password
  publicly_accessible  = false
  skip_final_snapshot  = true
  vpc_security_group_ids = [aws_security_group.db_sg.id]
}

resource "aws_security_group" "db_sg" {
  name = "db-security-group"

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Change this for better security
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_ecs_cluster" "graphql_cluster" {
  name = "graphql-cluster"
}

resource "aws_ecs_task_definition" "graphql_task" {
  family                   = "graphql-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 256
  memory                   = 512
  execution_role_arn       = aws_iam_role.ecs_execution_role.arn
  container_definitions = jsonencode([
    {
      name  = "graphql-container"
      image = "your-docker-image-url"
      memory = 512
      cpu = 256
      essential = true
      portMappings = [{
        containerPort = 4000
        hostPort      = 4000
      }]
      environment = [
        { name = "DB_HOST", value = aws_db_instance.postgres.address },
        { name = "DB_USER", value = var.db_user },
        { name = "DB_PASS", value = var.db_password }
      ]
    }
  ])
}

resource "aws_ecs_service" "graphql_service" {
  name            = "graphql-service"
  cluster         = aws_ecs_cluster.graphql_cluster.id
  task_definition = aws_ecs_task_definition.graphql_task.arn
  launch_type     = "FARGATE"
  desired_count   = 1
  network_configuration {
    subnets          = aws_subnet.public[*].id
    security_groups  = [aws_security_group.web_sg.id]
    assign_public_ip = true
  }
}
