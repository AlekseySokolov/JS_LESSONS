const myFilter = (array, callback) => {
    const result = [];

    const fn = (elem, index) => {
        (callback(elem, index) === true) ?
            result.push(elem) :
            result;
    };

    for (let index in array) {
        let currentElement = array[index];

        fn(currentElement, index);
    }
    return result;
};

console.log(myFilter([1, 2, 3], (num) => num > 2));
console.log(myFilter([1, 2, 3], (num, index) => index <= 1));
console.log(myFilter(['some', 'test', 'string'], (str) => str.length > 4));