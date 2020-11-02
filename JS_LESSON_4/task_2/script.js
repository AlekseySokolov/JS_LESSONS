const giveMeNumber = () => {
    const userInput =  prompt('Введите число! ...я бдю');
    const conditions = typeof Number(userInput) === 'number' && !isNaN(Number(userInput));
    conditions ? alert('Good boy!') : giveMeNumber();
};

giveMeNumber();