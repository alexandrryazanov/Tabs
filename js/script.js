import { tabSel } from './tabSelect.js';
import { timerTick } from './timer.js';
import { PopUp } from './popup.js';
import { testPromises } from './promises.js';

window.addEventListener('DOMContentLoaded', () => {
    //--Табы
    let tab = document.querySelectorAll('.info-header-tab'),
        infoHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    //--ТАЙМЕР
    let timer = document.getElementById('timer'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        deadline = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1, 0,0,0);

    //--Кнопка Узнать больше и PopUp
    let btnMore = document.querySelector('button.more'),
        popup = new PopUp('.overlay');

    //-- Вызов ф-ий
    tabSel(tab,infoHeader,tabContent);
    timerTick(hours,minutes,seconds, deadline);
    btnMore.addEventListener('click',()=>popup.show());
    testPromises(0)
        .then(()=>console.log('Это выполнится если resolve'))
        .then(()=>console.log('Это выполнится если resolve и выполнилась первая'))
        .then(()=>console.log('Это выполнится если resolve и выполнилась первая и вторая'))
        .catch(()=>console.log('Это выполнится если catch'))
        .then(()=>console.log('Это ТОЖЕ выполнится всегда'));

});



