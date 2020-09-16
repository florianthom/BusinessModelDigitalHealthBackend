// start app + localhost:5000/graphql
// (prisma playground funktioniert irgendwie nicht richtig -> die anfragen sind da irgendwie nicht sichtbar)
//
// query {
//   login (email: "test1@test1.de", password: "test1"){
//     token,
//     user {
//       firstName
//     }
//   }
// }

// prisma token -> funktioniert nicht -> token muss mit "richtiger query geholt werden"

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJja2VsNXh2ZXIwZTg2MDc4NHJlbGw0OXJpIiwiaWF0IjoxNTk5MDQzMzc1LCJleHAiOjE1OTkwODY1NzV9.NFzJZwxHZGo6SEaEpMjg5D1_K4gedFrnpxdU16CGIWw"
// {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJja2VtcWVnaHcwMDB2MDczNGFhem83N3QxIiwiaWF0IjoxNTk5NTYwNTc4LCJleHAiOjE1OTk2MDM3Nzh9.FY8bZp2uCX4wii8aSdDJwNvL67xt1Xbjc0fGFRsdp-o"}

// query {
//   getAllPattern
//   {
//     name
//   }
// }


//import express from "express"; 
// if above is not supported by your project environment then follow as below
import { ApolloServer, gql } from 'apollo-server-express';
import * as express from 'express';
import * as http from 'http';
import { prisma, User } from './generated/prisma-client/index';
import { importSchema } from 'graphql-import';
import { operationAuthorized, verifyToken } from './auth/Authorization';
import { Resolver } from './resolvers/resolvers';
import { SERVER_PORT } from './config/env.config';


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
        // auth disabled for development
        // const authRequired = false;
        const authRequired = (connection) ? operationAuthorized(connection.query) : operationAuthorized(req.body.query);
        console.log("auth required?: " + authRequired);
        const response = {
            db: prisma,
            req: req,
            userId: verifyToken(header, authRequired) //"ckex4pay500080798rhg5xtwk" //verifyToken(header, authRequired) // "ckarcrczl00080776jzr3qcyh" // verifyToken(header, authRequired)
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

server.applyMiddleware({ app });

// httpServer is created in app.listen(PORT, () => console.log("Server started on port " + PORT)); aswell
// but it is more or less recommended to create the server self (reason e.g. if you want to create https server)
const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => console.log("Server started on port " + PORT));
