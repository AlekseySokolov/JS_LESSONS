const object = {
    name: 'Tom',
    surname: 'Sawyer',
    age: 12,
    money: 7,
    gender: 'male',
    friends: 1,
};

const createObjectWithClones = (object) => {
    const result = {...object};

    const keys = Object.keys(object);
    const values = Object.values(object);

    const isNumber = (value) => typeof value === 'number';
    const keyClone = (index) => keys[index] + 'Clone';

    values.forEach((value, index) =>
        isNumber(value) ?
            result[keyClone(index)] = value * 2 :
            value
    );

    return result;
};


console.log(createObjectWithClones(object));