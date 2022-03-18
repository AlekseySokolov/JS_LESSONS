// Написать таймеры, которые будут выводить часы, минуты и секунды,
// где за каждый тип (час, мин, сек) будет отвечать свой таймер. Вывод в консоль

const showTime = (unit) => {
    const time = {
        second: 1000,
        minute: 60000,
        hour: 60 * 60000,
    };

    let currentTime = time[unit];

    let intervalId = setInterval(() => {
        console.log(`${currentTime / time[unit]} ${unit}`);
        currentTime += time[unit];
    }, time[unit]);
};

showTime("second");
showTime("minute");
showTime("hour");
