//  Создать какую-нить анимированную последовательность действий

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
    zoomCircle(150);
}

function doAnimationSequence() {
    move(300, 'left')
    setTimeout(() => move(300, 'top'), 2000)
    setTimeout(() => zoomCircle(150), 4000)
    setTimeout(() => zoomCircle(75), 6000)
    setTimeout(() => move(40, 'top'), 8000)
    setTimeout(() => move(40, 'left'), 10000)
}

function moveCircle(x, y, callback) {
    circleEl.style.left = x + 'px';
    circleEl.style.top = y + 'px';

    if (callback) {
        callback();
    }
}

function move(x, position) {
    circleEl.style[position] = x + 'px';
}


function zoomCircle(diameter) {
    circleEl.style.width = diameter + 'px';
    circleEl.style.height = diameter + 'px';
}

buttonDoAnimation.addEventListener('click', doAnimation);
buttonDoZoom.addEventListener('click', doZoom);
buttonDoAnimationSequence.addEventListener('click', doAnimationSequence);