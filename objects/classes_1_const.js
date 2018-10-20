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

let user = new User("NAME surnamE");
user.sayHi();
user.fullName = "Name splitted";
user.sayHi();

let new1 = User.getNew();
new1.sayHi();