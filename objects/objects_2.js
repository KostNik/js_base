function Man() {
    this.last = "One";
    this.first = "Two";
    this.middle = "Three";
}

let man = new Man();

console.log(man.last);
console.log(man);
console.log(JSON.stringify(man));
