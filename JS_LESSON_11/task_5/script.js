//  Добавить задержку в 1000мс перед последней анимацией

const circleEl = document.getElementById('circle');
const buttonDoAnimation = document.getElementById('doAnimation');
const buttonDoZoom = document.getElementById('doZoom');
const buttonDoAnimationSequence = document.getElementById('doAnimationSequence');

function animationCallback() {
    setTimeout(() => alert('Done'), 2000);
}


function doAnimation() {
    moveCircle(150, 150, animationCallback)
}

function doZoom() {
    zoomCircle({circleEl, diameter: 150});
}

function doAnimationSequence() {
    wait(circleEl, move, {x: 300, position: 'left'})
        .then(next => wait(next, move, {x: 300, position: 'top'}))
        .then(next => wait(next, zoomCircle, {diameter: 150}))
        .then(next => wait(next, zoomCircle, {diameter: 75}))
        .then(next => wait(next, move, {x: 40, position: 'top'}))
        .then(next => wait(next, move, {x: 40, position: 'left'}, 1000))
}

function moveCircle(x, y, callback) {
    circleEl.style.left = x + 'px';
    circleEl.style.top = y + 'px';

    if (callback) {
        callback();
    }
}

function wait(circleEl, callback, options, delay = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback({circleEl, ...options})

            circleEl.addEventListener('transitionend', function helper() {
                circleEl.removeEventListener('transitionend', helper);

                resolve(circleEl);
            })
        }, delay);
    })
}

function move({circleEl, x, position}) {
    circleEl.style[position] = x + 'px';
}

function zoomCircle({circleEl, diameter}) {
    circleEl.style.width = diameter + 'px';
    circleEl.style.height = diameter + 'px';
}

buttonDoAnimation.addEventListener('click', doAnimation);
buttonDoZoom.addEventListener('click', doZoom);
buttonDoAnimationSequence.addEventListener('click', doAnimationSequence);