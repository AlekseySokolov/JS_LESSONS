const isPrime = num => {
    for (let i = 2; i < num; i += 1)
        if (num % i === 0) {
            return false;
        }
    return true;
};

const primeNumbers = (range) => {
    let result = [];

    for (let i = 2; i <= range; i += 1) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    return result;
};

const primeNumbers2 = (range) => {
    let arr = [];

    for (let i = 2; i < range; i += 1) {
        arr[i] = true;
    }

    let p = 2;

    do {
        for (let i = 2 * p; i < range; i += p) {
            arr[i] = false;
        }

        for (let i = p + 1; i < range; i += 1) {
            if (arr[i]) {
                p = i;
                console.log('simple found', i);
                break;
            } else {
                p = range;
            }
        }
    } while (p < range);
};



const textContent = primeNumbers(100).join(', ');
const container = document.getElementById('root');
container.innerText = textContent;

primeNumbers2(100);