const http = require('http');

const server = new http.Server((req, resp) => {
    console.log("Server running at: ", "http://127.0.0.1:3000/");
    console.log(req.method, " : ", req.url);
    resp.end(`${req.method} ${req.url}`);
});

server.listen(3000, "127.0.0.1");

