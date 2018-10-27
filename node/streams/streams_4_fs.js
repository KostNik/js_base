let fs = require("fs");
let stream = new fs.ReadStream(__filename, {encoding: "utf-8"});
stream.pipe(resp);

stream.on("open", () => {

});

stream.on("readable", () => {

});

stream.on("error", () => {

});

stream.on("empty", () => {

});

stream.on("end", () => {

});

//buffer 64 kb