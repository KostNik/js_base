function Man() {
    this.last = "One";
    this.first = "Two";
    this.middle = "Three";
    this.printMe = function () {
        return "This Man [" + this.last + " ]";
    }
}

let man = {
    last:"One",
    first:"Two",
    middle:"Three",
    printMe: function () {
        return "This Man [" + this.last + " ]";
    }
};

let man = new Man();

console.log(man.printMe());
console.log(man);
console.log(JSON.stringify(man));
