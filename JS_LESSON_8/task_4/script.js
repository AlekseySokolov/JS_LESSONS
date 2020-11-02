const myReduce = (arr, callBack, initValue) => {
    let acc = initValue;

    for (let index in arr) {
        let currentValue = arr[index];

        acc = callBack(acc, currentValue, Number(index))
    }

    return acc;
};

const testFn1 = (a, b) => a + b;
const  testFn2  = (acc, value) => acc.includes(value) ? acc : acc.concat(value);
const  testFn3  = (acc, value) => acc + value;
const  testFn4  = (acc, value, index) => index !== 0 ? acc.concat(value) : acc;

console.log(myReduce([1, 2, 3], testFn1, 0));
console.log(myReduce([1, 1, 1, 3, 2, 3, 2], testFn2, []));
console.log(myReduce(['Concat ', 'me '], testFn3, ''));
console.log(myReduce(['false', 'true'], testFn4, []));