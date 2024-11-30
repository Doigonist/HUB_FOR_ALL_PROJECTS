'use strict';
let reward = document.createElement('p');
setTimeout(() => {
    reward.textContent = 'Что-то действительно появилось!';
    document.body.appendChild(reward);
}, 10000);