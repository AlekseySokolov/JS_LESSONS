//  Научить promisify возвращать промисифицированную (обернутую, как bind'ом) функцию. Т.е. вызов должен выглядеть так:
//  На лекции было так
//  promisify(loadScript, './1.js').then(...)
//  А надо сделать, чтоб было так
//  const loadScriptPromisified = promisify(loadScript)
//  loadScriptPromisified('./1.js').then(...)

function loadScript(src, cb) {
    let script = document.createElement('script')

    script.src = src
    script.onload = () => cb(null, script)
    script.onerror = () => cb(new Error(`Ошибка загрузки скрипта ${src}`))

    document.head.append(script)
}

function promisify(func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            const callback = (err, result) => err ? reject(err) : resolve(result)

            args.push(callback)

            func.call(this, ...args)
        })
    }
}

const loadScriptPromise = promisify(loadScript)