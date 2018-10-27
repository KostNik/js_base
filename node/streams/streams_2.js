let counter = 0;

let interval = setInterval(() => {
    console.log("counter = ", ++counter);
    if (counter === 3) clearInterval(interval);
}, 300);

let counter1 = 0;
setTimeout(work, 300);

function work() {
    console.log("counter1 = ", ++counter1);
    if (counter1 < 3) setTimeout(work, 300);
}