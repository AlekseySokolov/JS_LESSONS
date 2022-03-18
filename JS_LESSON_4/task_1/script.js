//без проверки на !number
const getMinNumber = (...numbers) => {
    if (numbers.length === 0) {
        return 'Вы не передали ни одного числа'
    }
    return numbers.sort((a, b) => a - b)[0];
};

console.log(getMinNumber(3, 45, 546, 7, 111, 2, 121));
console.log(getMinNumber());