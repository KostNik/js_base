const http = require('http');

const server = http.createServer((req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/plain');
    resp.end('Hello World\n');
});


server.listen(3000, '127.0.0.1', () => {
    console.log("Server running at", "http://127.0.0.1:3000/");
});