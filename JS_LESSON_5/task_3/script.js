const initObject = {
    a: 1,
    b: 2,
    c: 3,
    g: 5,
};

const cloneObject = (object) => {
    const result = {};

    for (let key in object) {
        result[key] = object[key];
    }

    return result;
};

const myObjectAssign = (target, ...source) => {
    const result = cloneObject(target);

    for (let index in source) {
        let object = source[index];

        for (let key in object) {
            result[key] = object[key];
        }
    }

    return result;
};

const resultObject = myObjectAssign(initObject, {a : 2}, {b : 8, a : 33}, {c : 12}, {d : 15});
resultObject.h = 10;

console.log(resultObject, initObject);