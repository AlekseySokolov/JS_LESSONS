const number1 = 5;
const number2 = -6;
const number3 = 0;

const positiveOrNegativeOrNil = (number = 0) => {
    const numberIs = `number = ${number}`;
    return number > 0 ? `${numberIs} : Положительное` :
        number < 0 ? `${numberIs} : Отрицательное` :
            `${numberIs} : Ноль`
};

alert(positiveOrNegativeOrNil(number1));
alert(positiveOrNegativeOrNil(number2));
alert(positiveOrNegativeOrNil(number3));