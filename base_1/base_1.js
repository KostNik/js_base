//let vs var for for loop

for (let x = 0; x < 3; x++) { //let area of visibility is within brackets
    console.log("x * x = ", x * x);
}
console.log("x * x = ", x * x); //relates to var below

for (var x = 0; x < 3; x++) {
    console.log("x * x = ", x * x);
}
console.log("x * x = ", x * x);


