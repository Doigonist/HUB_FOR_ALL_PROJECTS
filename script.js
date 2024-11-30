'use strict';
let main = document.querySelector('main');
let aside = main.querySelector('aside');
let img = aside.querySelector('img');
let h1 = main.querySelector('h1');
img.addEventListener('click', (e) =>{
    if (e.ctrlKey){
        console.log('Пасхалка запущена!');
        oyasumi_EASTEREGG();
    }
});
function oyasumi_EASTEREGG(){
    let arr = ["Close your eyes, you'll be here soon Ichi ni san shi go fun Tokidoki, hontou ni netai Demo, kono waado dekinai" ,
         "Oyasumi Oyasumi Oyasumi Oyasu—",
         "Oyasumi, oyasumi Close your eyes and you'll leave this dream Oyasumi, oyasumi I know that it's hard to do",
        "Days go by, shou ga nai Moments pass, shattered glass Hands of time, where's that chime? In my head I'll just, I'll just I'll just, I'll just",
        "Hands (Hands!) of time will wring my neck Every little moment spells regret But I don't have to feel this way As a voice inside my head",
        "Oyasumi Oyasumi Oyasumi Oyasu—",
        "Oyasumi, oyasumi Close your eyes and you'll leave this dream Oyasumi, oyasumi I know that it's hard to do",
        "Hey! Hеy! Hey! Hey, hey, hеy, hey!",
        "Oyasumi, oyasumi Close your eyes and you'll leave this dream Oyasumi, oyasumi I know that it's hard to do",
        "Oyasumi, oyasumi Close your eyes and you'll leave this dream Oyasumi, oyasumi I know that it's hard to do last"
    ]
    let counter = 0;
    setInterval(()=>{
        if (counter > arr.length){
            h1.textContent = "Привет!";
            return console.log('Пасхалка окончилась.');
        }
        h1.textContent = arr[counter];
        counter++;
    }, 10000)

}
// Close your eyes, you'll be here soon Ichi ni san shi go fun Tokidoki, hontou ni netai Demo, kono waado dekinai
// Oyasumi Oyasumi Oyasumi Oyasu—
// Oyasumi, oyasumi Close your eyes and you'll leave this dream Oyasumi, oyasumi I know that it's hard to do
// Days go by, shou ga nai Moments pass, shattered glass Hands of time, where's that chime? In my head I'll just, I'll just I'll just, I'll just
// Hands (Hands!) of time will wring my neck Every little moment spells regret But I don't have to feel this way As a voice inside my head
// Oyasumi Oyasumi Oyasumi Oyasu—
// Oyasumi, oyasumi Close your eyes and you'll leave this dream Oyasumi, oyasumi I know that it's hard to do
// Hey! Hеy! Hey! Hey, hey, hеy, hey!
// Oyasumi, oyasumi Close your eyes and you'll leave this dream Oyasumi, oyasumi I know that it's hard to do
// Oyasumi, oyasumi Close your eyes and you'll leave this dream Oyasumi, oyasumi I know that it's hard to do
