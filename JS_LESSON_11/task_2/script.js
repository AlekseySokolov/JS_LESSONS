//  Добавить zoomCircle (изменение размеров). Можно заморочиться и учесть сдвиг влево и вверх при расширении

const circleEl = document.getElementById('circle');
const buttonDoAnimation = document.getElementById('doAnimation');
const buttonDoZoom = document.getElementById('doZoom');

function animationCallback() {
    setTimeout(() => alert('Done'), 2000);
}

function doAnimation() {
    moveCircle(150, 150, animationCallback)
}

function doZoom() {
    zoomCircle(150);
}

function moveCircle(x, y, callback) {
    circleEl.style.left = x + 'px';
    circleEl.style.top = y + 'px';

    callback();
}

function zoomCircle(diameter) {
    circleEl.style.width = diameter + 'px';
    circleEl.style.height = diameter + 'px';
}

buttonDoAnimation.addEventListener('click', doAnimation);
buttonDoZoom.addEventListener('click', doZoom);