const source = [1, 2, 5, 99, 432, 23, 45, 83, 11, 7, 8, 44, 534, 100];

const getEvenNumbers = (source, target) => {
    const rest = source.filter(num => num % 2 === 0);

    return [...target, ...rest];
};

const evenNumbers = getEvenNumbers(source, []);
console.log('result1', evenNumbers);

const target2 = [600, 800];
const evenNumbers2 = getEvenNumbers(source, target2);
console.log('result2', evenNumbers2);

console.log('notMutateSource', source);
console.log('notMutateSTarget',target2);