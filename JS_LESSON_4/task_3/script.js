const validator = (num) => num >= 18;

const giveMeNumber = (validator) => {
    const userInput =  prompt('Так сколько вам лет?');
    const errorInput  = userInput === '' || userInput === null || isNaN(Number(userInput));
    const conditions = typeof Number(userInput) === 'number' && validator(userInput);

    if (errorInput) {
        return giveMeNumber(validator);
    }

   conditions ? alert('Проходите!') : alert('Пошел вон!');
};

giveMeNumber(validator);