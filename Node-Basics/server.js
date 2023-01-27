const http = require('http');
const arch = require('process');
const fs = require('fs');
const routes = require('./routes');
const server = http.createServer(routes.handler);

server.listen(5000);