const arr = [];
const obj = {};

function A() {
    return arr;
}
function B() {
    return arr;
}

let a = new A();
let b = new B();

console.log(a === b);