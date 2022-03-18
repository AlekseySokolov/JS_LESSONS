// Написать функцию отложенного вызова

function showSum(a, b) {
    console.log(a + b)
}

const delay = (func, timeout) => {
    return function () {
        setTimeout(() => func.apply(this, arguments), timeout);
    }
}

const delayedFunc = delay(showSum, 3000)

delayedFunc(5, 7)

const delay2 = (func, timeout, ...rest) => {
    function executor() {
        setTimeout(() => func.apply(this, rest), timeout);
    }

    executor()
}

delay2(showSum, 3000, 1, 2)