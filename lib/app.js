"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express from "express"; 
// if above is not supported by your project environment then follow as below
const express = require("express");
const env_config_1 = require("./config/env.config");
const apollo_server_express_1 = require("apollo-server-express");
const http = require("http");
const graphql_import_1 = require("graphql-import");
const prisma_client_1 = require("./generated/prisma-client");
const Authorization_1 = require("./auth/Authorization");
const Resolvers_1 = require("./resolvers/Resolvers");
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
        const authRequired = (connection) ? Authorization_1.operationAuthorized(connection.query) : Authorization_1.operationAuthorized(req.body.query);
        const response = {
            db: prisma_client_1.prisma,
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
httpServer.listen(PORT, () => console.log("Server started on port " + PORT));
//# sourceMappingURL=app.js.map