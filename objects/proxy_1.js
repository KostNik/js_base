let user = {};

let proxy = new Proxy(user, {
    get(target, prop) {
        console.log(`read ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Write ${prop} ${value}`);
        target[prop] = value;
        return true;
    }
});

proxy.firstName = "Test";
proxy.lastName = "LastName";
const firstName = proxy.firstName;
console.log(user.lastName);
console.log(user.firstName);