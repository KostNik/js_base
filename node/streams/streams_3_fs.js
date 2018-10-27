let fs = require("fs");
let file = fs.readFileSync("some_file.txt"); //sync
fs.readFile("some_file.txt", (err, data) => {
    if (err) {

    } else {
        let data = data.toString();
    }
}); //async