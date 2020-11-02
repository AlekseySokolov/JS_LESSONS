const numbers = [1, 2, 5, 99, 432, 23, 45, 83, 11, 7, 8, 44, 534, 100];

const getEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);

const evenNumbers = getEvenNumbers(numbers);

console.log(evenNumbers);
console.log(numbers);