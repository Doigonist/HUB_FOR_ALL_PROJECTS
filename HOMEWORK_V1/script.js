"use strict";
let table = document.querySelector("table");
let button = document.querySelector("button");
let name = document.getElementById("name");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let counter = 0;
let firstTR = document.querySelector("tbody");
let countsum = document.getElementById("count_sum");
let counter_sum = 0;
countsum.textContent = 'Общая сумма:' + ' ' + counter_sum;
let TableManager = {
    counter: counter,
    addrow: function addrow() {
        if (name.value != '' && price.value != '' && quantity.value != '' && price.value >= 0 && quantity.value >= 0) {
         let price_check = parseInt(price.value);
        let quantity_check = parseInt(quantity.value);
        counter++;
        let tr = document.createElement("tr");
        let sum = parseInt(price_check + quantity_check);
        let dataforinsert = [name.value, price.value, quantity.value, sum];
        for (let i = 0; i <= 4; i++){
            let td = document.createElement("td");
            if (i == 4){
                td.innerHTML = "<a>Удалить</a>" + counter;
                td.style.color = "darkred";
                td.addEventListener("click", TableManager.deleterow);
                tr.appendChild(td);
                console.log("Новая строка была создана.");
                counter_sum += sum;
                td.setAttribute("sum", sum);
            }else{
                dataforinsert.forEach(() =>{
                    td.textContent = dataforinsert[i];
                    tr.appendChild(td);
                });
            }
        }
        firstTR.insertAdjacentElement('afterend', tr);
        countsum.textContent = 'Общая сумма:' + ' ' + counter_sum;

        }else{
            let p = document.createElement('p');
            p.textContent = "Введите корректные данные.";
            button.disabled = true;
            table.insertAdjacentElement('beforebegin', p);
            setTimeout(() => {
                p.remove();
                console.log("Предупреждение удалено."); 
                button.disabled = false;
            }, 5000);
        }
    },
    deleterow : function deleterow(){
            counter_sum = counter_sum - parseInt(this.getAttribute('sum'));
            console.log(this.getAttribute('sum'));
            countsum.textContent = 'Общая сумма:' + ' ' + counter_sum;
            this.parentElement.remove();  
            counter--;
            console.log("Строка удалена.");

    }

}
