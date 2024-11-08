"use strict";
/*let a = 12345;
let b = a.toString();
console.log(b);
console.log(parseInt(b[0]) + parseInt(b[1]) + parseInt(b[2]) + parseInt(b[3])+ parseInt(b[4]));*/
// let a = prompt("Введите число");
// let b = 'сумма цифр числа ' + parseInt(a) + ' равняется: ' + parseInt(a).toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
// alert(b);

// let a = prompt("Введите сторону по вертикали");
// let b = prompt("Введите сторону по горизонтали");
// let per = parseInt(a) * 2 + parseInt(b) * 2;
// alert(per);
// document.write('Данная информация является конфиденциальной. Если вы не являетесь сотрудником центра разработок AUT, то немедленно сожгите данный документ.')


// let a = prompt("Введите 1 число");
// let b = prompt("Введите 2 число");
// function getRandomArbitary(min, max) {
// 	return Math.random() * (max - min) + min;
// }



// 1 Создайте функцию, которая генерирует случайное число от 50 до 150 , округляет его вниз, затем возвращает его квадратный корень с точностью до двух знаков после запятой.
// let random;
// function getRandomNumber(min, max) {
// 	random = Math.floor(Math.random() * (max - min + 1) + min);
// 	return Math.sqrt(random).toFixed(2);

// }
// console.log(getRandomNumber(50,150));



// 2 Создайте функцию, которая принимает строку и проверяет, начинается ли она с подстроки "Test". Если да, возвращает строку без 3 последних символов в нижнем регистре.
// let str = "Test hi hello world cOOl NUMEBER OOO";
// function checkString(str) {
//     if( str.includes('Test')) {
//          return str.slice(0 , -3).toLowerCase();
//     }
// }
// console.log(checkString(str)); 
// 3 Создайте функцию, которая принимает массив строк, удаляет все строки, содержащие подстроку "remove", затем добавляет строку "added" в конец массива.
// let arr= ['remove', 'add', 'remove', 'remove', 'remove', 'remove', 'remove', 'remove', 'remove', 'remove'];
// function checkArray(arr) {
// 	for(let i=0; i < arr.length; i++){
// 		if(arr[i] === 'remove'){
// 			arr.splice(i, 1);
//             i--;
// 			arr.push('added');
//         }
// 	} 	
// }

// checkArray(arr);

// console.log(arr);
// let select = document.querySelector('select');
// let checktext = document.querySelector('p');
// for (let i = 1000; i <= 3000; i++) {
//     let option = document.createElement('option');
//     option.value = i;
//     option.textContent = i;
//     select.appendChild(option);
// }

// select.addEventListener('change', checkDate);
// function checkDate(){
//     let selectedYear = parseInt(this.value);
//     let date = new Date(selectedYear, 2, 0);
//     if (date.getDate() === 29) {
//         checktext.textContent = "Високосный год";
//         return true;
//     }else{
//         checktext.textContent = "Обычный год";
//         return false;
//     }
// }
// let select = document.querySelector('select');
// let counter = 0;
// for (let i = 2000; i <= 2030; i++) {
//     let option = document.createElement('option');
//     option.value = i;
//     option.textContent = i;
//     select.appendChild(option);
// } 
// let date = new Date();
//  let currentmonth = date.getFullYear();
//  console.log(currentmonth);
// select.selectedIndex = currentmonth - 2000;
 
// let input = document.querySelector('input[type="text"]');
// let p = document.querySelector('p');
// input.addEventListener('keypress', function(event){
//     if (event.code == "Enter"){
//         p.textContent = input.value;
//         input.value = '';
//     }
// });
// let li = document.querySelectorAll('li');
// let button = document.querySelectorAll('button');
// let number = 0;
// for (let el of li) {
//     console.log(el)
// }
// li.forEach(function(){
//     this.addEventListener('click', function(event){
//         if (event.ctrlKey){
//             number = 2;
//             this.textContent += number; 
//         }else if(event.shiftKey){
//             number = 3;
//             this.textContent += number;
//         }else{
//             number = 1;
//             this.textContent += number;
//         }
//     });
 
// });
// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
// 	list.appendChild(item);
// });
// list.addEventListener('click', function(event) {
// 	event.target.textContent = event.target.textContent + '!';
// });

let createbutton = document.querySelector('button');
let img_array = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.png'];
let welcome_text = document.getElementById('welcome_text');

function generateGallery(){
    welcome_text.style.display = 'none'
    createbutton.style.display = 'none'
    let newDiv = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.style.fontSize = "64px";
    h1.textContent = 'Галерея';
    document.body.appendChild(newDiv);
    newDiv.insertAdjacentElement('beforebegin' , h1);
    for (let i = 0; i < img_array.length; i++) {
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        img.src = img_array[i];
        img.width = 250;
        img.height = 250;
        newDiv.appendChild(h2);
        h2.textContent = 'Картинка ' + (i+1);
        newDiv.appendChild(img);

    }
    let p = document.createElement('p');
    p.textContent = 'Красиво, не правда ли?';
    p.style.fontSize = "48px";
    newDiv.insertAdjacentElement('afterend', p);
    createbutton.removeEventListener('click', generateGallery);
}
createbutton.addEventListener('click', generateGallery);