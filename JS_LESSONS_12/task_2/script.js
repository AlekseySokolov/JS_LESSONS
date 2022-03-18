// Нужно вызвать wait внутри функции f
// чтобы вызвать wait() и дождаться результата '10'

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000))

    return 10
}


function f1() {
    return wait().then(res => console.log(res)).catch(() => {})
}

/* :) */
function f2() {
    (async () => console.log(await wait()))()
}

f1()
f2()
