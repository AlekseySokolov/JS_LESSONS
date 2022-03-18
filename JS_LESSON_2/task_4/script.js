const number1 = 5;
const number2 = -6;
const number3 = 0;

const positiveOrNegativeOrNil = (number = 0) => {
    const numberIs = (prefix) =>
        `number = ${number} : ${prefix}`;

    if (number > 0) {
        return numberIs('Положительное')
    } else if (number < 0) {
        return numberIs('Отрицательное')
    } else {
        return numberIs('Ноль')
    }
};

alert(positiveOrNegativeOrNil(number1));
alert(positiveOrNegativeOrNil(number2));
alert(positiveOrNegativeOrNil(number3));