// Создать функцию bind используя apply

const person = {
    name: 'Alex'
};

function getName(argument1, argument2) {
    return `${this.name} ${argument1} ${argument2}`;
}

const bind = (fn, context, ...rest) =>
    (...arguments) => fn.apply(context, [...rest, ...arguments]);

const bind2 = (fn, context, ...rest) => fn.apply(context, rest);

const bindingGetName = (...params) => bind2(getName, person, ...params)

console.log(bind(getName, person, 'argument1', 'argument2')());
console.log(bind(getName, person, 'argument3')('argument4'));
console.log(bind(getName, person)('argument5', 'argument6'));

console.log(bind2(getName, person, 'argument11', 'argument22'));

console.log(bindingGetName('argument111', 'argument222'));

console.log(person);