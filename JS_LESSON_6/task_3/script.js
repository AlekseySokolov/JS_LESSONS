function Calculator(int) {
    this.result = int;

    this.add = function(int2) {
        return this.result += int2;
    };

    this.take = function(int2) {
        return this.result -= int2;
    };

    this.div = function(int2) {
        return  this.result /= int2;
    };

    this.mul = function(int2) {
        return this.result *= int2;
    };
}

let calculator = new Calculator(1);

alert(calculator.add(2));
alert(calculator.div(3));
alert(calculator.mul(5));
alert(calculator.take(1));
