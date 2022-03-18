const giveMeNumber = (label) => {
    const userInput =  prompt(label);
    const conditions = typeof Number(userInput) === 'number'
        && !isNaN(Number(userInput))
        && userInput !== '';

    if (conditions) {
        return userInput;
    } else {
        return giveMeNumber(label);
    }
};

const number = giveMeNumber('Введите число! ...я бдю');
console.log(number);