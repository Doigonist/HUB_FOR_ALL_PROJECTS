"use strict";
let form = document.querySelector('form');
let labels = document.querySelectorAll("label");
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let confirm_ = document.querySelector("input[type=button]");
let return_ = document.querySelector("button");
let p = document.querySelector("p");
labels[1].style.display = "none";
inp2.style.display = "none";
confirm_.style.display = "none";


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
    if (inp1.value != inp2.value && inp2.value != '' && inp1.value != '' && inp2.value <= 10 && inp1.value <= 10 && inp2.value != 0 && inp1.value != 0  && inp2.value != inp1.value)  {
    form.style.display = "none";
    let max = parseInt(inp1.value);
    let min = parseInt(inp2.value);
    let cellid = 0;
    let random_tr = Math.floor(Math.random() * (max - min + 1) + min);
    let random_td = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(inp1.value + " - Максимальное число " + inp2.value + " - Минимальное число ");
    console.log(random_tr + "  - Количество рядов " + random_td + " - Количество столбцов")
    let table = document.getElementById("tables");
    table.setAttribute('border', '=1px');
    for(let i = 0; i < random_tr; i++){
        let row = document.createElement("tr");
        for(let j = 0; j < random_td; j++){
            cellid++;
            let cell = document.createElement("td");
            cell.setAttribute("data-attribute" , cellid ); 
            cell.textContent = 
            cell.style.opacity = 1;
            row.appendChild(cell);
            cell.style.color = "transparent";
        }
        table.appendChild(row);
    }
    let counter = 0;
        let cellscounter = 0;
        let cells = document.querySelectorAll("td");
        console.log(cells.length);
        let timer = setInterval(function(){
            p.textContent = counter++;
    
        }, 1000);
        cells.forEach(function(element){
               element.addEventListener("click", function(e){
                    if (element.getAttribute("checked")){
                    console.log("Элемент уже был нажат!")
                    element.removeAttribute("checked");
                    element.style.color = "transparent";
                    element.style.transition = "all 0s";
                    cellscounter--;
                    }else{
                    ++cellscounter;
                    element.textContent = this.getAttribute("data-attribute");
                    element.style.color = "white";
                    element.style.transition = "all 0.5s";
                    element.setAttribute("checked", true);
                }
                if (cellscounter == cells.length){
                    clearInterval(timer);
                    p.textContent = 'Поздравляю! Вы выиграли за ' + counter + ' секунд';
                    setTimeout(() => {
                        form.style.display = "flex";
                        table.innerHTML = '';
                        labels[1].style.display = "none";
                        inp2.style.display = "none";
                        confirm_.style.display = "none";
                        cellscounter = 0;
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