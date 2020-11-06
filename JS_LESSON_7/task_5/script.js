const source = [1, 2, 5, 99, 432, 23, 45, 83, 11, 7, 8, 44, 534, 100];
const target = [];

// for (let index in source) {
//     if (source[index] % 2 === 0) {
//         target.push(source[index])
//     }
// }

source.forEach(int => {
    if (int % 2 === 0) {
        target.push(int)
    }
});

console.log(target);