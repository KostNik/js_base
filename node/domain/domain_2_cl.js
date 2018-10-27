let cluster = require("cluster"); //work with cpu's cores
let cores = require("os").cpus().length;
let http = require("http");

const list = [];

if (cluster.isMaster) {
    console.log(`Master ID = ${process.pid} is running`);
    //fork
    for (let i = 0; i < cores; i++) {
        list.push(cluster.fork());

        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ID= ${worker.process.pid} died`)
        })
    }
} else {
    http.createServer((req, resp) => {
        resp.writeHead(200);
        resp.end(`Answered ${process.pid}`);
    }).listen(3000);
    console.log(`Worker ID =${process.pid} started`);
}

if (list[0]) list[0].disconnect();
