function Calculator(int) {
    let result = int;

    this.add = int2 => result += int2;

    this.take = int2 => result -= int2;

    this.div = int2 => result /= int2;

    this.mul = int2 => result *= int2;
}

let calculator = new Calculator(1);

alert(calculator.add(2));
alert(calculator.div(3));
alert(calculator.mul(5));
alert(calculator.take(1));
