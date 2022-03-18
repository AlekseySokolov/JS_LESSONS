//  Заморочиться и используя setTimeout/setInterval (а не transition)
//  добиться более-менее плавной анимации и честного 
//  момента срабатывания колбэков.


// тут конечно накривокодил :) но работает +-

const circleEl = document.getElementById('circle');
const buttonDoAnimation = document.getElementById('doAnimation');
const buttonDoAnimation2 = document.getElementById('doAnimation2');

circleEl.style.left = '20px'
circleEl.style.top = '60px'
circleEl.style.width = '50px'
circleEl.style.height = '50px'

function doAnimation() {
    setTimeout(() => {
        doAction(zoomUp, 2000,
            {
                circleEl,
                x: 12,
                diameter: 150
            }
        )
    }, 0);
    setTimeout(() => {
        doAction(zoomDown, 2000,
            {
                circleEl,
                x: 80,
                diameter:
                    50
            }
        )
    }, 2000);
}

function doAnimation2() {
    doPromiseAction(circleEl, zoomUp, 2000,
        {
            circleEl,
            x: 12,
            diameter: 150
        }
    ).then(circleEl =>
        doPromiseAction(circleEl, zoomDown, 2000,
            {
                circleEl,
                x: 80,
                diameter: 50
            }
        )
    )
}

function doAction(callback, maxTime, options) {
    let start = Date.now();

    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        if (timePassed >= maxTime) {
            clearInterval(timer);

            return;
        }

        callback({...options, timePassed});

    }, 10);
}


function doPromiseAction(circleEl, callback, maxTime, options) {
    return new Promise((resolve) => {
        let start = Date.now();

        let timer = setInterval(function () {
            let timePassed = Date.now() - start;

            if (timePassed >= maxTime) {
                clearInterval(timer);

                return;
            }

            callback({...options, timePassed})

            setTimeout(() => resolve(circleEl), maxTime)
        }, 10);
    })
}


function zoomUp({circleEl, x, diameter, timePassed}) {
    const currentWidth = circleEl.style.width.split('px')[0]

    if (currentWidth < (timePassed / x) && diameter > currentWidth) {
        circleEl.style.width = timePassed / x + 'px';
        circleEl.style.height = timePassed / x + 'px';
    }
}


function zoomDown({circleEl, x, diameter, timePassed}) {
    const currentWidth = circleEl.style.width.split('px')[0]

    if (diameter < currentWidth) {
        circleEl.style.width = currentWidth - timePassed / x + 'px';
        circleEl.style.height = currentWidth - timePassed / x + 'px';
    } else {
        circleEl.style.width = diameter + 'px'
        circleEl.style.height = diameter + 'px'
    }
}

buttonDoAnimation.addEventListener('click', doAnimation);
buttonDoAnimation2.addEventListener('click', doAnimation2);