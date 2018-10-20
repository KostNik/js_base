function F() {
    this.value = 20;
}

F.prototype = {m:function () {}};

function B() {}

B.prototype = new F();
B.prototype.f = 'Hello World';

var test = new B();

