// Написать call (можно без доп. параметров. Только функция и контекст)
// без использования bind/call/apply

const person = {
    name : 'Alex'
};

function getName(someArgument1, someArgument2) {
    return `${this.name} ${someArgument1} ${someArgument2}`;
}

const call = (fn, context, ...rest) => {
    const contextCopy = Object.assign({}, context);
    const id = `f${(+new Date).toString(16)}`;

    contextCopy[id] = fn;

    return contextCopy[id](...rest)
};

console.log(call(getName, person, 'argument1', 'argument2'));
console.log(person);