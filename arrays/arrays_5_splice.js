var array = new Array("banana", "orange", "mango");

let outSplice_1 = array.splice(2, 0, "Lemon", "Cabbage");

console.log(outSplice_1);
console.log(array);

let outSplice_2 = array.splice(0, 1);
console.log(outSplice_2);
console.log(array);

console.log(array.concat(["next_array"]));