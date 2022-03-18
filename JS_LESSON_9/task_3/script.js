// Попытаться по памяти воспроизвести кеш-функцию
'use strict';

const sum = (a, b) => {
    console.log(`sum -> ${a} + ${b}`);

    return a + b;
};

const assign = (object1, object2) => {
    console.log(`assign -> ${JSON.stringify(object1)} with ${JSON.stringify(object2)}`);

    return Object.assign({}, object1, object2);
};

const cache = (callback) => {
    const cacheObject = {};

    return (...args) => {
        const cacheKey = JSON.stringify(args);

        if (cacheObject[cacheKey]) {
            return cacheObject[cacheKey];
        } else {
            cacheObject[cacheKey] = callback.call(null, ...args);
            return cacheObject[cacheKey];
        }
    }
};


// Почему так редко юзается Map? 
// по мне интерфейс красивее
// и производительнее в некоторых случаях?
const cacheWithMap = (callback) => {
    const cacheObject = new Map();

    return (...args) => {
        const cacheKey = JSON.stringify(args);

        if (cacheObject.has(cacheKey)) {
            return cacheObject.get(cacheKey);
        } else {
            cacheObject.set(cacheKey, callback.call(null, ...args));
            return cacheObject.get(cacheKey);
        }
    }
};

const sumCached = cache(sum);

console.log(sumCached(1, 4));
console.log(sumCached(2, 3));
console.log(sumCached(1, 4));
console.log(sumCached(2, 3));
console.log(sumCached(1, 7));
console.log(sumCached(9, 9));
console.log(sumCached(9, 9));

const assignCached = cacheWithMap(assign);

console.log(assignCached({a: 2, c: {d: 4}}, {b: 3}));
console.log(assignCached({a: 3}, {b: 5}));
console.log(assignCached({a: 2, c: {d: 4}}, {b: 3}));
console.log(assignCached({a: 3}, {b: 5}));
console.log(assignCached({a: 8}, {b: 7}));
console.log(assignCached({a: 2, c: {d: 4}}, {b: 3}));