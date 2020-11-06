const calculator = {
    init: function(a, b) {
        this.a = a;
        this.b = b;
    },
    add: function() {
        return this.a + this.b

    },
    diff: function() {
        return this.a - this.b
    }
};

calculator.init(1, 2);

console.log(calculator.add());
console.log(calculator.diff());
console.log(calculator.a);
console.log(calculator.b);
