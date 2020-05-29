//import express from "express"; 
// if above is not supported by your project environment then follow as below
import * as express from "express";
import { SERVER_PORT } from './config/env.config';
import { ApolloServer, gql } from 'apollo-server-express';
import * as http from 'http';
import { importSchema } from 'graphql-import';
import * as testRoutes from "./routes/tests";
import { prisma, User } from './generated/prisma-client';
import { operationAuthorized, verifyToken } from './auth/Authorization';
import { Resolver } from './resolvers/Resolvers';


const PORT = (process.env.PORT) ? process.env.PORT : SERVER_PORT;
const app = express();

const server: ApolloServer = new ApolloServer({
  typeDefs: gql(importSchema("./src/prisma/schema.graphql")),

  resolvers: Resolver,

  // connection-object for apollo / prisma / graphql subscriptions
  context: ({req, connection,res}) => {
      let header = { authToken: "" };
      if (connection)
      {
          header = connection.context;
      } else
      {
          header.authToken = req.headers.authorization;
      }

      const authRequired = (connection) ? operationAuthorized(connection.query) : operationAuthorized(req.body.query);

      const response = {
          db: prisma,
          req: req,
          userId: verifyToken(header, authRequired)
      };

      return response;
  },

  subscriptions: {
      onConnect: (connectionParams: any) => {
          console.log('Connection initiated');
          return { authToken: connectionParams.Authorization };
      },
      onDisconnect: () => {
          console.log('Web Socket were disconnected');
      }
  },

  playground: true,

  introspection: true
});

// request without router class
//app.get('/', function (req, res) {res.send('GET request to the homepage');});

//app.use("/api/v1/tests", testRoutes);

server.applyMiddleware({ app });

// httpServer is created in app.listen(PORT, () => console.log("Server started on port " + PORT)); aswell
// but it is more or less recommended to create the server self (reason e.g. if you want to create https server)
const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);

// http://localhost:5000/graphql
httpServer.listen(PORT, () => console.log("Server started on port " + PORT));
