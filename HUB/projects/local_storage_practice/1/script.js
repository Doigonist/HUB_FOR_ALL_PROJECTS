'use strict';
// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;
// let inp1 = document.querySelector('input[type=text]');
// let inp2 = document.getElementById('num1');
// let inp3 = document.getElementById('num2');
// let button = document.querySelector('button');
// let arr;
// button.addEventListener('click', function(){
//     arr = JSON.parse(json);
//     arr.push({
//         "name": inp1.value,
//         "age": Number(inp2.value),
//         "salary": Number(inp3.value)
//     });
// });
// localStorage.setItem('key1' , 1);
// localStorage.setItem('key2' , 12131);
// localStorage.setItem('key3' , 112312321312313213231321321313);
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     let data = localStorage.getItem('key1');
//     let data2 = localStorage.getItem('key2');
//     let data3 = localStorage.getItem('key3');
//     console.log(" Первое число - " + data + ' Второе число - ' + data2 + ' Третье число - ' + data3);
// })
// let time = localStorage.getItem('time');

// if (time === null) {
// 	let now = Date.now();
// 	localStorage.setItem('time', now);
// }
// let h1 = document.querySelector('h1');
// h1.textContent = 'Ваше последнее время захода на сайт - ' + (Math.floor((Date.now() - Number(time)) / 1000)) + ' в секундах';
// console.log(Date.now())
// let day = document.getElementById('day');
// let month = document.getElementById('month');
// let year = document.getElementById('year');
// let submit = document.querySelector('input[type=submit]');

// submit.addEventListener('click', function(event){
//     event.preventDefault();
//     let day_local = localStorage.setItem('day' , day.value);
//     let month_local = localStorage.setItem('month' , month.value);
//     let year_local = localStorage.setItem('year' , year.value);
// });
// let birthday_day = localStorage.getItem('day');
// let birthday_month = localStorage.getItem('month');
// let birthday_year = localStorage.getItem('year');
// let current_date = new Date();

// if (current_date.getDate() == birthday_day && (current_date.getMonth() + 1) == birthday_month) {
//     let h1 = document.createElement('h1');
//     h1.textContent = 'С днём рождения!';
//     console.log(h1);
//     document.body.appendChild(h1);
// }

// let inp = document.querySelector('input');
// let check = localStorage.getItem('nums');

// if (check === null){
//     console.log('ERROR');
// }else{
//     inp.value = check;
// }
// inp.addEventListener('blur' , function(e) {
//     let num = localStorage.getItem('nums');
//     if (num === null){
//         num = localStorage.setItem('nums', inp.value);
//     }else{

//     }
// })
// let div = document.querySelector('div');
// let counter_local = localStorage.getItem('counter');
//  if (counter_local === null) {
//     counter_local = 0;
//  }

// div.textContent = 'Количество обновлений страницы - ' + counter_local;
// if(counter_local >= 10){
//     localStorage.removeItem('counter');
//     alert('Счётчик был обнулён!');
//     location.reload();
    
// }
// else{
// counter_local++;
// localStorage.setItem('counter', counter_local);
// }

// let button = document.querySelector('button');
// button.addEventListener('click' , function(){
//     localStorage.removeItem('counter');
//     location.reload();
// })
// let inp1 = document.getElementById('inp1');
// let inp2 = document.getElementById('inp2');
// let inp3 = document.getElementById('inp3');
// let button = document.querySelector('button');
// if (!localStorage.getItem('arr') === null){
//     let arr1 = localStorage.getItem('arr');
//     inp1.value = arr1[0];
//     inp2.value = arr1[1];
//     inp3.value = arr1[2];
// }else{
//     let arr = [];

// button.addEventListener('click', addelementstoarr);
// function addelementstoarr(){
//     let arr = [];
//     arr.push(inp1.value, inp2.value, inp3.value)
//     localStorage.setItem('arr', JSON.stringify(arr))
//     button.removeEventListener('click',addelementstoarr);
// }
// }
// let form = document.querySelector('form');
// let inp1 = form.querySelector('input[type=text]')
// let inp2 = form.querySelector('input[type=password]')
// let submit = form.querySelector('input[type=submit]');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
// localStorage.clear();
// document.location.reload();
// });
// if (localStorage.getItem('loginCredentials') != null){
//     let data = localStorage.getItem('loginCredentials');
//     let json_ = JSON.parse(data);
//     inp1.value = json_[0];
//     inp2.value = json_[1];
// }
// submit.addEventListener('click', function(e){
//     e.preventDefault();
//     transferElements()
// });
// function transferElements(){
//     let arr = [];
//         arr.push(inp1.value, inp2.value);
//     let json = JSON.stringify(arr);
//     if (localStorage.getItem('loginCredentials') === null){
//         console.log('Данные для входа не найдены. Создаю новые...');
//         localStorage.setItem('loginCredentials', json);
//         setTimeout(function(){
//             document.location.replace('form.html');
//         }, 2000);
//     }else{
//         console.log('Данные уже есть, заменяю на новые');
//         arr = [];
//         arr.push(inp1.value, inp2.value);
//         localStorage.setItem('loginCredentials', json);
//         json = JSON.stringify(arr);
//         setTimeout(function(){
//             document.location.replace('form.html');
//         }, 2000);
//     }
// };
let table = document.querySelector('table');
let input = document.querySelector('input[type="text"]');
let control_panel_arr = ['<input type="checkbox" id="checkbox">' , '<a>Удалить</a>'];
let json;
let data_local = [];
let counter = 1;

if (localStorage.getItem('tasks')!= null){
    json = localStorage.getItem('tasks');
    data_local = JSON.parse(json);
    data_local.forEach(function(el){
        let row = document.createElement('tr');
        let cell1 = document.createElement('td');
        let cell2 = document.createElement('td');
        let cell3 = document.createElement('td');
        cell1.textContent = el.task;
        cell2.innerHTML = control_panel_arr[0];
        cell3.innerHTML = control_panel_arr[1];
        row.appendChild(cell1);
        cell1.addEventListener('dblclick', editRow);
        row.appendChild(cell2);
        row.appendChild(cell3);
        table.appendChild(row);
        let a = document.querySelectorAll('a');
        a.forEach(function(el){
            el.addEventListener('click', deleteRow);
        });
    })
}
input.addEventListener('blur', function(event) {
    if (input.value != ''){
        let task = input.value;
        let row = document.createElement('tr');
        for (let i = 0; i <= 2 ; i++) {
            let cell_counter = 1;
            let cell = document.createElement('td');
            cell.textContent = task;
            cell.setAttribute('id' , cell_counter);
            cell_counter++;
            row.appendChild(cell);
            if (i === 1) {
                cell.innerHTML = control_panel_arr[0];
            }else if (i === 2){
                cell.innerHTML = control_panel_arr[1];
            }
        }
        let cells = row.querySelectorAll('td');
        cells[0].addEventListener('dblclick', editRow);
        data_local.push({
            task: task,
            done: false,
        });
        json = JSON.stringify(data_local);
        localStorage.setItem('tasks', json);
        table.appendChild(row);
        counter++;
        let a = document.querySelectorAll('a');
        a.forEach(function(el){
            el.addEventListener('click', deleteRow);
        });
    }else{
        console.log('Проверка на дурачка v1.1 Всегда на страже')
    }

});
let checkbox = document.querySelectorAll('input[type=checkbox]');

checkbox.forEach(function(el){
    el.addEventListener('click', markAsDone)
    let check = localStorage.getItem('tasks');
    let row = el.parentNode.parentNode;
    let index = Array.from(row.parentNode.children).indexOf(row) - 1;
    if (data_local[index].done){
        el.checked = true;
        
    }
})
function deleteRow(){
    let row = this.parentNode.parentNode;
    let index = Array.from(row.parentNode.children).indexOf(row) - 1;
    console.log(index);
    data_local.splice(index, 1);
    json = JSON.stringify(data_local);
    localStorage.setItem('tasks', json);
    row.parentNode.removeChild(row);
}
function markAsDone(){
    let checkbox = this;
    let row = this.parentNode.parentNode;
    let index = Array.from(row.parentNode.children).indexOf(row) - 1;
    data_local[index].done = checkbox.checked;
    json = JSON.stringify(data_local);
    localStorage.setItem('tasks', json);

}
function editRow(){
    let cell = this;
    let input = document.createElement('input');
    console.log(cell);
    input.value = cell.textContent;
    cell.textContent = '';
    cell.appendChild(input);
    input.addEventListener('blur', function(event) {
        cell.textContent = input.value;
        let row = cell.parentNode;
        let index = Array.from(row.parentNode.children).indexOf(row) - 1;
        data_local[index].task = input.value;
        json = JSON.stringify(data_local);
        localStorage.setItem('tasks', json);
        cell.textContent = input.value;
        input.remove();
    });
}