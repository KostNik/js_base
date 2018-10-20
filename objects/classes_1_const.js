class User {

    constructor(name, surname) {
        this.surname = surname;
        this.name = name;
    }

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }

    static getNew() {
        return new User("test", "user");
    }

    sayHi() {
        console.log(this.name, "->", this.surname);
    }
}

class Girl extends User {

    constructor(name, surname, age) {
        super(name, surname);
        this.age = age;
    }

    sayHi() {
        super.sayHi();
        console.log("age ->", this.age);
    }
}

let user = new Girl("NAME", "surname", 12);
user.sayHi();
user.fullName = "Name splitted";
user.sayHi();

let new1 = User.getNew();
new1.sayHi();