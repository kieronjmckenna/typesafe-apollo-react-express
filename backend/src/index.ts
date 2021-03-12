import express from "express";
import { PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "apollo-server-express";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const runServer = () => {
  const app = express();
  // const client = new PrismaClient();

  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });

  server.applyMiddleware({ app, path: "/graphql" });

  const port: number = 4000;

  app.listen(port, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
};

runServer();
