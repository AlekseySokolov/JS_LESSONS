//Переписать код в виде ifов
let n = 3;

// switch (n) {
//     case 1:
//         console.log(`${n} апельсин`);
//         break;
//     case 2:
//     case 3:
//     case 4:
//         console.log(`${n} апельсина`);
//         break;
//     default:
//         console.log(`${n} апельсинов`)
// }

const getDeclension = (num) => {
    return num === 1 ?
        console.log(`${num} апельсин`) :
        num > 1 && num <= 4 ? console.log(`${num} апельсина`) :
        console.log(`${num} апельсинов`)
};

getDeclension(n);