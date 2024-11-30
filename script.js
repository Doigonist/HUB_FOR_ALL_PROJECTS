'use strict';
let reward = document.createElement('p');
let img = document.createElement('img')
setTimeout(() => {
    reward.textContent = 'Что-то действительно появилось!';
    document.body.appendChild(reward);
    img.setAttribute('src', 'img/alexander.png');
    document.body.appendChild(img);
    img.setAttribute('width', 1000);
    img.setAttribute('height', 500);
    
}, 10000);