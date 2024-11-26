'use strict';
let selected_record;
let json;
let record_content = [];
let records_counter = 1;
let records = document.getElementById('records');
let create_record_button = records.querySelector('button');
let bloknot = document.getElementById('bloknot');
let records_area = document.getElementById('records_area')
let controls = document.getElementById('controls');
let dev_info = document.getElementById('dev_info');
let dev_info_text = dev_info.querySelectorAll('p');
let input_text = dev_info_text[0].querySelector('input[type=text]');
let edit_button = document.getElementById('redact');
let delete_button = document.getElementById('delete');
delete_button.addEventListener('click', deleteRecord)
innit();
input_text.value = '';
controls.style.display = 'none';
create_record_button.addEventListener('click', addNewRecord);
edit_button.addEventListener('click', editRecord);
function addNewRecord(){
    let p = document.createElement('p');
    p.textContent = 'Запись ' + records_counter;
    p.classList.add('records_text');
    p.setAttribute('record_id' , records_counter);
    records_area.appendChild(p);
    p.addEventListener('click', selectNewRecord);
    record_content.push({
        record_id : records_counter - 1,
        record_text : 'Новая запись' + records_counter
    });
    json = JSON.stringify(record_content);
    console.log('В хранилище будет засунут следующий JSON - ' + json);
    localStorage.setItem('records', json)
    records_counter++;
    console.log('Была добавлена новая запись под номером - ' + p.getAttribute('record_id') + '.');

}
function selectNewRecord(){
    let record = this;
    let record_id = this.getAttribute('record_id');
    let record_textcontent = record_content[record_id - 1].record_text;
    console.log('Выбрана запись под номером - ' + record_id + '.');
    selected_record = record_id;
    bloknot.innerHTML = '<p style="font-size:28px">'+record_textcontent+'</p>';
    let p = bloknot.querySelector('p');
    console.log(p);
    input_text.value = p.style.fontSize;
    input_text.addEventListener('blur', function(){
        let p = bloknot.querySelector('p');
        p.setAttribute('style', 'font-size:'+ input_text.value);
    })
    controls.style.display = 'flex';
}
function innit(){
    if (localStorage.getItem('records') !== null){
        let rec_count = 0;
        console.log('Данные обнаружены! Начинаю процесс инициализации.');
        record_content = localStorage.getItem('records');
        record_content = JSON.parse(record_content);
        record_content.sort(function (a, b) {
            if (a.record_id > b.record_id) {
              return 1;
            }
            if (a.record_id < b.record_id) {
              return -1;
            }
            return 0;
          });
        records_counter = record_content.length + 1;
        for(let i = 0; i < record_content.length; i++){
            let p = document.createElement('p');
            p.textContent = 'Запись ' + record_content[i].record_id;
            p.classList.add('records_text');
            p.setAttribute('record_id' , record_content[i].record_id);
            records_area.appendChild(p);
            p.addEventListener('click', selectNewRecord);
        }
        console.log('Записи были созданы!')

    }else{
        return console.warn('Процесс инициализации был прерван по причине отсутствия данных о записях...');
        
    }
    return console.log('Процесс инициализации окончен.')
}
function deleteRecord(){
    console.log('Следуя из простейшей логики будет удалена запись под номером - ' + selected_record);
    console.log('Начинаю процесс удаления...');
    let p_arr = records_area.querySelectorAll('p');
    record_content.splice(selected_record - 1, 1)
    let rec_count = 0
    record_content.forEach(() => {
        record_content[rec_count].record_id = rec_count + 1;
        rec_count++;

      });
    json = JSON.stringify(record_content);
    console.log('В хранилище будет засунут следующий JSON - ' + json);
    localStorage.setItem('records', json);
    console.log('Страница вскоре будет перезагружена!');
    setTimeout(()=>{
        location.reload();
    }, 2000)
}
function editRecord(){
    let p = bloknot.querySelector('p')
    let text_area = document.createElement('textarea');
    text_area.textContent = p.textContent;
    bloknot.innerHTML = '';
    bloknot.appendChild(text_area);
    text_area.addEventListener('blur', function(){
        let text = text_area.value;
        bloknot.innerHTML = '<p style="font-size:28px">'+text+'</p>';
        record_content[selected_record - 1].record_text = text;
        json = JSON.stringify(record_content);
        localStorage.setItem('records', json);
        console.log('Запись была успешно обновлена!');
    });
}