const http = require('http');
const url = require('url');

new http.Server((req, resp) => {
    console.log("Server running at: ", "http://127.0.0.1:3000/");
    // console.log(req.method, " : ", req.url);
    let parsedURl = url.parse(req.url, true);

    if (parsedURl.pathname === "/echo" && parsedURl.query.msg) {
        resp.once("drain", () => { //some action
            
        });
        resp.on("close", () => { //some action

        });
        resp.end(parsedURl.query.msg);
    } else {
        resp.statusCode = 404;
        resp.end("ERROR 404");
    }
}).listen(3000, "127.0.0.1");

