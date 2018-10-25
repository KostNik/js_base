var a = require('debug')('worker:a');
var b = require('debug')('worker:b');

function work() {
    a('some work a');
    setTimeout(work, Math.random() * 2000);
}

work();


function workB() {
    b('some work b');
    setTimeout(workB, Math.random() * 3000);
}

workB();