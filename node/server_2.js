const http = require('http');

const server = new http.Server();

server.listen(3000, "127.0.0.1", () => {
    console.log("Server running at: ", "http://127.0.0.1:3000/");
});


server.on('request', (req, resp) => {
    resp.end("Hello world!!!\n");
});