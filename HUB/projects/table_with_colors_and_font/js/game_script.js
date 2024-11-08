"use strict";
let form = document.querySelector('form');
let labels = document.querySelectorAll("label");
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let confirm_ = document.querySelector("input[type=button]");
let return_ = document.querySelector("button");
let p = document.querySelector("p");
let numbers = document.getElementById("numbers");
labels[1].style.display = "none";
inp2.style.display = "none";
confirm_.style.display = "none";
// let random_font_size = Math.floor(Math.random() * (28 - 14 + 1) + 14);
let random_color = ['red', 'green', 'blue', 'purple', 'orange', 'lime', 'wheat','lightblue'];
// let random_color_id = Math.floor(Math.random() * (random_color.length - 0 + 1) + 0);
let number_to_click = 1;



inp1.addEventListener('keypress', function(e){
    if (e.key === 'Enter' && inp1.value != ''&& inp1.value <= 10){
       console.log("Первый этап проверки пройден! открыт второй инпут!");
       inp2.style.display = "inline";
       inp2.style.animation = "input_load 1s ease-in-out";
       labels[1].style.display = "inline";
       labels[1].style.animation = "input_load 1s ease-in-out";
    }else{
    }
})
inp2.addEventListener('keypress', function(e){
    if (e.key === 'Enter' && inp2.value != '' && inp2.value <= 10 && inp1.value <= 10 && inp1.value > 0 && inp2.value > 0){
       console.log("Второй этап проверки пройден! Игра может начаться!");
       confirm_.style.display = "inline";
       confirm_.style.animation = "input_load 1s ease-in-out";
    }else{

    }
})
confirm_.addEventListener('click', function(e){
    // let max = parseInt(inp1.value);
    // let min = parseInt(inp2.value);
    // let random_tr = Math.floor(Math.random() * (max - min + 1) + min);
    // let random_td = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(inp1.value + " - Максимальное число " + inp2.value + " - Минимальное число ");
    // console.log(random_tr + "  - Количество рядов " + random_td + " - Количество столбцов")
    generateRandomTable();
    // startGame();
    e.preventDefault();
})
function generateRandomTable(){
    if (inp2.value != '' && inp1.value != '' && inp2.value <= 10 && inp1.value <= 10 && inp2.value != 0 && inp1.value != 0) {
        form.style.display = "none";
        let max = parseInt(inp1.value);
        let min = parseInt(inp2.value);

        let random_tr = inp1.value;
        let random_td = inp2.value;
        console.log(inp1.value + " - Максимальное число " + inp2.value + " - Минимальное число ");
        console.log(random_tr + "  - Количество рядов " + random_td + " - Количество столбцов")

        let table = document.getElementById("tables");
        table.setAttribute('border', '=1px');

        let cellid = [];
        for (let i = 1; i <= random_tr * random_td; i++) {
            cellid.push(i);
        }

        for (let i = cellid.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [cellid[i], cellid[j]] = [cellid[j], cellid[i]];
        }
        let index = 0;
        for (let i = 0; i < random_tr; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < random_td; j++) {
                let cell = document.createElement("td");
                cell.setAttribute("data-attribute", cellid[index++]);
                cell.textContent = cellid[index - 1];
                cell.style.color = random_color[Math.floor(Math.random() * random_color.length)];
                console.log("клетке " + cellid[index], " Дан цвет " + cell.style.color);
                cell.style.fontSize = Math.floor(Math.random() * (28 - 14 + 1) + 14) + 'px';
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    let counter = 180;
        let cells = document.querySelectorAll("td");
        console.log(cells.length);
        cells.forEach(function(element){
               element.addEventListener("click", function(e){
                    if (element.getAttribute("data-attribute") != number_to_click){
                    console.log("Неправильно! Попробуй ещё раз");
                    numbers.textContent = "Неправильно! Попробуй ещё раз. Следующее число на которое ты должен нажать это : " + number_to_click;
                    setTimeout(function(){
                        numbers.textContent = '';
                    }, 4000)
                    }else if (number_to_click == this.getAttribute('data-attribute')){
                        ++number_to_click;
                        element.style.color = "transparent";
                }
                if (number_to_click == cells.length + 1){
                    clearInterval(timer);
                    p.textContent = 'Поздравляю! Вы выиграли за ' + counter + ' секунд';
                    setTimeout(() => {
                        form.style.display = "flex";
                        table.innerHTML = '';
                        labels[1].style.display = "none";
                        inp2.style.display = "none";
                        confirm_.style.display = "none";
                        number_to_click = 1;
                        cells.forEach(function(element){
                            element.removeAttribute("checked");
                            element.style.color = "transparent";
                        });
                        p.textContent = '';
                        return;  
                    }, 5000);
                }
            });
        });
        let timer = setInterval(function(){
            p.textContent = counter--;
            if (counter == 0){
                clearInterval(timer);
                p.textContent = 'Вы проиграли!';
                setTimeout(() => {
                    form.style.display = "flex";
                    table.innerHTML = '';
                    labels[1].style.display = "none";
                    inp2.style.display = "none";
                    confirm_.style.display = "none";
                    number_to_click = 1;
                    cells.forEach(function(element){
                        element.removeAttribute("checked");
                        element.style.color = "transparent";
                    });
                    p.textContent = '';
                    return;  
                }, 5000);
            }
        }, 1000);

}else{
    alert('Error');
    inp1.value = '';
    inp2.value = '';
    return;
}
    inp1.value = '';
    inp2.value = '';
}
// function startGame(){
//     let counter = 0;
//     let cells = document.querySelectorAll("td");
//     cells.forEach(function(){
//            this.addEventListener("click", function(e){
//             this.style.opacity = 1;
//             this.style.transition = "opacity 0.5s";
//          });
//     });
//     p.textContent = setInterval(function(){
//         p.textContent = counter++;

//     }, 1000);
// }