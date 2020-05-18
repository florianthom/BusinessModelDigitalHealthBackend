//import express from "express"; 
// if above is not supported by your project environment then follow as below
import * as express from "express";
import { SERVER_PORT } from './config/env.config';



const app = express();

console.log(SERVER_PORT);

app.get("/", (req, res)=> {
  res.send("Hello");
});

app.listen(5000, () => console.log("Server running"));


/* const http = require('http');;
const express = require('express');
const bodyParser = require('body-parser');
// DB Config
const db = require("./config/keys").PORT;





const app = express();

// Bodyparser Middleware
// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(bodyParser.json());




// conncect to mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

// Use routes
app.use("/api/pages", pages)
app.use("/api/tests", tests)
app.use("/api/searches", searches)
app.use("/api/statistics", statistics)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));








const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */