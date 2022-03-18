// Что выведется?

const animal = {
    jumps: null,
};

const rabbit = {
    __proto__: animal,
    jumps: true,
};

console.log(rabbit.jumps); // ? (1) true, потому что св-во имеется в объекте rabbit и оно true "property shadowing"
delete rabbit.jumps;
console.log(rabbit.jumps); // ? (2) null, потому что было св-во было удалено из rabbit,
// далее поиск в прототипе animal, оно там есть и оно null
delete animal.jumps;
console.log(rabbit.jumps); // ? (3) undefined, нету в rabbit -> поиск в rabbit.[[Prototype]] ->
// из animal было удалено -> св-во не найдено-> поиск в продолжаем в rabbit.[[Prototype]][[Prototype]]
// в итоге получим undefined , св-во не найдено