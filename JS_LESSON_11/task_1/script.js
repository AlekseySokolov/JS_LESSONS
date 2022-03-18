// Добавить колбэк в moveCircle и вывести alert'ом че-нить

const circleEl = document.getElementById('circle');
const buttonDoAnimation = document.getElementById('doAnimation');

function whenAnimationEnd() {
    setTimeout(() => alert('че-нить'), 2000);
}

function doAnimation() {
    moveCircle(150, 150, whenAnimationEnd)
}

function moveCircle(x, y, callback) {
    circleEl.style.left = x + 'px';
    circleEl.style.top = y + 'px';

    callback();
}

buttonDoAnimation.addEventListener('click', doAnimation);