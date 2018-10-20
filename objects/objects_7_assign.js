let user = {name: "Billy"};
let visitor = {isAdmin: false, visits: true};
let admin = {isAdmin: true};

Object.assign(user, admin, visitor);
console.log(JSON.stringify(user));
Object.assign(user, visitor, admin);
console.log(JSON.stringify(user));
