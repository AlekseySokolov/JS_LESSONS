// Посмотреть на класс Date и выводить новое время в консоль при наступлении новой секунды

const getTime = () => {
    const now = new Date();

    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
};

(function showTime() {
    const intervalId = setInterval(() => console.log(getTime()), 1000)
})();