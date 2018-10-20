let man = {
    last: "One",
    first: "Two",
    middle: "Three",
    printMe: function () {
        return "This Man [ " + this.last + " ]";
    },
    printMe2() {
        return "This Man [ " + this.first + " ]";
    },
    get fullName() {
        return `${this.last} ${this.first}`;
    }
};

console.log(man.printMe());
console.log(man.printMe2());
console.log(man.fullName);

console.log(man);
console.log(JSON.stringify(man));
