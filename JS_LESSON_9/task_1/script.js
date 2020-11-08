// Создать функцию bind используя apply

const person = {
    name : 'Alex'
};

function getName(someArgument1, someArgument2) {
    return `${this.name} ${someArgument1} ${someArgument2}`;
}

const bind = (fn, context, ...rest) =>
    (...arguments) => fn.apply(context, [...rest, ...arguments]);

console.log(bind(getName, person,'argument1', 'argument2')());
console.log(bind(getName, person,'argument1')('argument2'));
console.log(bind(getName, person)('argument1', 'argument2'));

console.log(person);