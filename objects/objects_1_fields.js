let o1 = new Object();
let o2 = {};
let fancy = "CrazyMan";
let man = {
    last: "One",
    first: "Two",
    middle: "Three",
    fancy
};

console.log(man.last);
console.log(man);
console.log(JSON.stringify(man));


man.age = 30;
delete man.middle;
for (let key in man) {
    console.log(man[key])
}
console.log(JSON.stringify(man));
