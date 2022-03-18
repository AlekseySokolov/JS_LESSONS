// Написать call (можно без доп. параметров. Только функция и контекст)
// без использования bind/call/apply

const person = {
    name: 'Alex'
};

const person2 = {
    name: 'Falcon'
};


function getName(argument1, argument2) {
    return `${this.name} ${argument1} ${argument2}`;
}

const call = (fn, context, ...rest) => {
    const id = `id${(Number(new Date)).toString(16)}`;
    const finalContext = {...context, [id]: fn};

    return finalContext[id](...rest)
};

console.log(call(getName, person, 'argument1', 'argument2'));
console.log(call(getName, person, 'frontend', 'dev'));
console.log(call(getName, person2, 'test', 'arg'));

console.log(person);
console.log(person2);