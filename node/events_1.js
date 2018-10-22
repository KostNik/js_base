let EventEmitter = require("events").EventEmitter;

let manager = new EventEmitter();

manager.on("request", (request) => {
    request.myProperty = true;
});

manager.on("request", (request) => {
    console.log(request);
});

manager.on("some_key", (request) => {
    console.log(request, " some_key");
});


manager.emit("request", {data: "DATA"});
manager.emit("request", {data: "ONE MORE DATA"});
manager.emit("some_key");