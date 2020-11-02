const calculator = {
    init: (a, b) => {
        this.a = a;
        this.b = b;
    },
    add: () => {
        return this.a + this.b

    },
    diff: () => {
        return this.a - this.b
    }
};

calculator.init(1, 2);

console.log(calculator.add());
console.log(calculator.diff());
