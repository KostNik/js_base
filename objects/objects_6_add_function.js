let man = {
    last:"One",
    first:"Two",
    middle:"Three"
};

man.printMe = function () {
    return "This Man [" + this.last + " ]";
};

console.log(man.printMe());
