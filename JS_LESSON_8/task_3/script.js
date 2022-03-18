const array = ['кришна', 'кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '0_o'];

const unique = (array) => Array.from(new Set(array));
const unique2 = (array) =>
    array.reduce((acc, value) =>
        acc.includes(value) ? acc : acc.concat(value)
        , []);

console.log(unique(array));
console.log(unique2(array));