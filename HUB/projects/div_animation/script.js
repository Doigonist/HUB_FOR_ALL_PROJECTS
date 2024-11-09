"use strict";
let input = document.querySelector('input[type=text]');
let button = document.querySelector('button');
let div = document.querySelector('div');
function transformText(e){
    // let p = document.createElement('p');
    // p.textContent = input.value;
    // div.appendChild(p)
    // return
    let cool_text = input.value.split(' ');
    console.log(cool_text);
    let letters = [];

    for (let i = 0; i < cool_text.length; i++) {
        let word = cool_text[i];
        let word_letters = word.split('');
        letters = letters.concat(word_letters);
    }
    console.log(letters);
};
button.addEventListener('click' , transformText);