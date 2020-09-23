const http = require('http');

const server = http.createServer((req, res) => {
    res.end('ola mundo');
});

server.listen(3000);