const source = [1, 2, 5, 99, 432, 23, 45, 83, 11, 7, 8, 44, 534, 100];
const target = [];


const takeEvenNumbersFromSource = (source, target) => {
    for (let index in source) {
        let currentNumber = source[index];
        if (currentNumber % 2 === 0) {
            target.push(currentNumber);
            source.splice(index, 1);
            return takeEvenNumbersFromSource(source, target)
        }
    }
};

takeEvenNumbersFromSource(source, target);
console.log(target);
console.log(source);