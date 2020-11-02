const validator = (num) => num >= 18;

const giveMeNumber = (validator) => {
    const userInput =  prompt('Так сколько вам лет?');

    if (userInput === '') {
        alert('Что значит ok?');
        return giveMeNumber(validator);
    }
    if (userInput === null) {
        alert('Отказываетесь отвечать?... пошел вон!');
        return;
    }
    if (isNaN(Number(userInput))) {
        alert('Непонял...');
      return giveMeNumber(validator);
    }

    const conditions = typeof Number(userInput) === 'number' &&
        validator(userInput);

   return conditions ? alert('Проходите!') : alert('Пошел вон!');
};

giveMeNumber(validator);