// Написать функцию отложенного вызова

function showSum(a, b) {
    alert(a + b);
}

showSum.callDefer = (delay, a, b) => {
    setTimeout(() => showSum(a, b), delay);
};

showSum.callDefer(2000, 1, 2);

// showSum.__proto__.callDefer = (delay, a, b) =>
//     setTimeout(() => showSum(a, b), delay);
//
// showSum.callDefer(2000, 1, 2);