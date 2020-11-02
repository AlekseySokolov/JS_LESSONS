const fields = {
    someKey1 : {
        type : 'number',
        value: 20,
    },
    someKey2 : {
        type : 'string',
        value: '20',
    },
    someKey3 : {
        type : 'string',
        value: 'Tor',
    },
    someKey4 : {
        type : 'number',
        value: 5,
    },
    someKey5 : {
        type : 'number',
        value: 1,
    },
    someKey6 : {
        type : 'string',
        value: 'none',
    },
    someKey7 : {
        type : 'number',
        value: 11,
    },
};

const getNumbersSum = (fields) => {
    const values = Object.values(fields);

    return values.reduce((acc, field) => {
        const { type, value } = field;
       return type === 'number' ? acc += value : acc
    }, 0)
};

console.log(getNumbersSum(fields));