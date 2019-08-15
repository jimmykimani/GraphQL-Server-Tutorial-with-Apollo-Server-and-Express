/** @format */

import "dotenv/config";
import cors from "cors";
import http from "http";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./schema";
import resolvers from "./resolvers";
import models, { sequelize } from "./models";

const app = express();

const httpServer = http.createServer(app);

const isTest = !!process.env.TEST_DATABASE;
const isProduction = !!process.env.DATABASE_URL;
const port = process.env.PORT || 8000;

app.use(cors());

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers,
  context: {
    models
  }
});

server.applyMiddleware({
  app,
  path: "/graphql"
});

sequelize.sync({ force: isTest || isProduction }).then(async () => {
  httpServer.listen({ port }, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
  });
});
