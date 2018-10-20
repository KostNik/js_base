let man = {
    last: "One",
    first: "Two",
    middle: "Three",
};

man["field"] = man.last + " arbitrary " + man.middle;

console.log(man["field"]);
console.log(man["last"]);

let lastName = "last";
console.log(man[lastName]);
console.log(JSON.stringify(man));

