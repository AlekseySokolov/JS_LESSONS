const source = [1, 2, 5, 99, 432, 23, 45, 83, 11, 7, 8, 44, 534, 100];
const target = [];


const takeEvenNumbersFromSource = (source, target) => {
    const targetCopy = [...target];

    for (let i = 0; i <= source.length - 1; i += 1) {

        if (source[i] % 2 === 0) {
            targetCopy.push(source[i]);
            source.splice(i, 1);
            i -= 1;
        }
    }

    return targetCopy;
};

console.log('result', takeEvenNumbersFromSource(source, target));
console.log('target', target);
console.log('source', source);
