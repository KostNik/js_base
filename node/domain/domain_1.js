let domain = require("domain"); //handle server exceptions
let domainV = domain.create();
let http = require("http");
let server;

domainV.on("error", err => {
    console.log("intercept error", err);
});

domainV.run(() => {
    server = new http.Server();
});

server.on("request", () => {
    setTimeout(() => {
        wrongFn();
    }, 300)
});

server.emit("request");