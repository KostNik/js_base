var array = new Array("banana", "orange", "mango");

let out = array.join("---");

console.log(out);

let last = array.pop();//remove from last
console.log("last ", last);

let count = array.push("ONE_FRUIT_YET");//add to last
console.log("count, array ", count, array);

let outShift = array.shift();//move to left
console.log("outshift ", outShift, array);

let outUnshift = array.unshift("one fruit", "two fruit");//add from left
console.log("outUnshift ", outUnshift, array);
