let fancy = "CrazyMan";
let man = {
    last: "One",
    first: "Two",
    middle: "Three",
    fancy
};
console.log(JSON.stringify(man));

man.age = 30;


if("age" in man) console.log(man.age);
if("fancy" in man) console.log(man.fancy);