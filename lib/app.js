"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express from "express"; 
// if above is not supported by your project environment then follow as below
const express = require("express");
const env_config_1 = require("./config/env.config");
const http = require("http");
const PORT = (process.env.PORT) ? process.env.PORT : env_config_1.SERVER_PORT;
const app = express();
// request without router class
/*
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
  });
*/
// for initial testing
//app.use("/api/v1/tests", testRoutes);
// Bodyparser Middleware
// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
//app.use(bodyParser.json());
// httpServer is created in app.listen(PORT, () => console.log("Server started on port " + PORT)); aswell
// but it is more or less recommended to create the server self (reason e.g. if you want to create https server)
const httpServer = http.createServer(app);
httpServer.listen(PORT, () => console.log("Server started on port " + PORT));
//# sourceMappingURL=app.js.map