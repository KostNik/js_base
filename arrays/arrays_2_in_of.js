var array = [1.2, "text", false, function (t_param) {
    console.log(t_param);
}];

for (var key in array) { //index
    console.log(key, array[key]);
}

for (let value of array) { //value
    console.log(value);
}

console.log(array.valueOf());
console.log(array.toString());