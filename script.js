'use strict';
let reward = document.createElement('p');
let img = document.createElement('img')
setTimeout(() => {
    reward.textContent = 'Что-то действительно появилось!';
    document.body.appendChild(reward);
    img.setAttribute('src', 'img/alexander.png');
    document.appendChild(img);
}, 10000);