const myMap = (array, callback) => {
    const result = [];

    const fn = (elem, index) => {
        result.push(callback(elem, index));
    };

    for (let index in array) {
        let currentElement = array[index];

        fn(currentElement, Number(index));
    }
    return result;
};

console.log(myMap([2, 3, 5], (num) => num * 2));
console.log(myMap([2, 3, 5], (num, index) => index));
console.log(myMap(['Some', 'Test', 'String'], (word) => word[0]));