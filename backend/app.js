const express = require('express');
const http = require('http');

const app = express();

const server = http.createServer(app)
const port = 5000
server.listen(port)
console.log(`NodeJS Server running on port ${port}.`);
