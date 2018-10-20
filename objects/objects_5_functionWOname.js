let methodname = "nameOfMeth";
let methodname2 = "nameOfMeth2";


let man = {
    [methodname](){
        return "Fire me";
    },
    [methodname2](){
        return "Survey me";
    }
};

console.log(man.nameOfMeth());
console.log(man["nameOfMeth2"]());
console.log(man[methodname]());
