"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express from "express"; 
// if above is not supported by your project environment then follow as below
const apollo_server_express_1 = require("apollo-server-express");
const express = require("express");
const http = require("http");
const index_1 = require("./generated/prisma-client/index");
const graphql_import_1 = require("graphql-import");
const Authorization_1 = require("./auth/Authorization");
const Resolvers_1 = require("./resolvers/Resolvers");
const env_config_1 = require("./config/env.config");
const PORT = (process.env.PORT) ? process.env.PORT : env_config_1.SERVER_PORT;
const app = express();
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: apollo_server_express_1.gql(graphql_import_1.importSchema("./src/prisma/schema.graphql")),
    resolvers: Resolvers_1.Resolver,
    // connection-object for apollo / prisma / graphql subscriptions
    context: ({ req, connection, res }) => {
        let header = { authToken: "" };
        if (connection) {
            header = connection.context;
        }
        else {
            header.authToken = req.headers.authorization;
        }
        const authRequired = false;
        // auth disabled for development
        //const authRequired = (connection) ? operationAuthorized(connection.query) : operationAuthorized(req.body.query);
        const response = {
            db: index_1.prisma,
            req: req,
            userId: Authorization_1.verifyToken(header, authRequired)
        };
        return response;
    },
    subscriptions: {
        onConnect: (connectionParams) => {
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
// {
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNqcDl2ZzY3YzAwMGkwOTUxMWo5cWlveXAiLCJpYXQiOjE1NDM5MzU5MjMsImV4cCI6MTU0NjUyNzkyM30.jzJTQdS2EDQdMF2gFiMrC2xboHXbSBB5lQQ0mOVLTcg"
// }
httpServer.listen(PORT, () => console.log("Server started on port " + PORT));
/*

query {
  login (email: "hi", password: "asdf"){
    user {
      firstName
    }
  }
}

*/ 
//# sourceMappingURL=app.js.map