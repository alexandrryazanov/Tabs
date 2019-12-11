import { tabSel } from './tabSelect.js';
import { timerTick } from './timer.js';
import { PopUp } from './popup.js';

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
});




