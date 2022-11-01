const http = require('http');

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (req, res) => {
    res.end('Hello World!');
});

server.listen(8000);