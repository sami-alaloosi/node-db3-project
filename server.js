const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());

// to make sure that the server is up and running correctly
server.get("/", (req, res)=>{
    res.status(200).send(`<h1> Server is up and runnig </h1>`)
})

server.use('/api/schemes', SchemeRouter);

module.exports = server;