import "reflect-metadata";

import express from "express";
import { ApolloServer } from "@apollo/server"; // Updated import
import { expressMiddleware } from "@apollo/server/express4"; // Middleware for Apollo v4
import { schema } from "./graphql/schema";
import sequelize from "./config/database";
import cors from "cors";
import bodyParser from "body-parser";
import { json } from "body-parser"; // Explicit import for JSON parsing

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

async function startServer() {
  const server = new ApolloServer({ schema });
  await server.start(); // Start Apollo Server first

  app.use(cors());
  app.use(json()); // Ensure JSON parsing for Apollo
  app.use("/graphql", expressMiddleware(server) as any);

  // Sync database and start server
  await sequelize.sync();
  app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/graphql");
  });
}

startServer().catch((err) => {
  console.error("Error starting server:", err);
});
