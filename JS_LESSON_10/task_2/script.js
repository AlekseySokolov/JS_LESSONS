// Есть два хомяка. Ест один - наедаются оба. Почему? Исправить
//Так происходит из-за наследования св-ва stomach, когда speedy вызывает метод eat,
//в массив stomach кладется value. и speedy и lazy имеют наследуют это св-во оно общее в их прото
//Решение - записывать изменяемые св-ва в объект, а не в его прото.

const hamster = {
    // stomach: [],
    eat(food) {
        this.stomach.push(food)
    },
};
const speedy = {
    __proto__: hamster,
    stomach: []
};
const lazy = {
    __proto__: hamster,
    stomach: []
};


speedy.eat('apple');

console.log(speedy.stomach);
console.log(lazy.stomach);