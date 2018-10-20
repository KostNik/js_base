let animal = {
    walk() {
        console.log("run");
    }
};

let rabbit = {
    __proto__: animal,
    walk() {
        console.log(super.walk.toString());
        super.walk();
    }
};

rabbit.walk();
let walkV = rabbit.walk;
walkV();


