const isPrime = num => {
    for (let i = 2; i < num; i += 1)
        if (num % i === 0) {
            return false;
        }
     return num > 1;
};

const primeNumbers = (range) => {
    let result = [];
    for (let i = 2; i <= range; i += 1) {
        isPrime(i) && result.push(i)
    }
    return result;
};

const textContent = primeNumbers(100).join(', ');
const container = document.getElementById('root');
container.innerText = textContent;