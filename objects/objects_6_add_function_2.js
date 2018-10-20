let petr = {last: "Petr"};
let ivan = {last: "Ivan"};

let printMe = function () {
    return "This Man [" + (this.last ? this.last : "noname ]");
};

petr.print = printMe;
ivan.print = printMe;

console.log(petr.print());
console.log(ivan.print());
console.log(printMe());
