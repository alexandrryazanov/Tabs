import { tabSel } from './tabSelect.js';
import { timerTick } from './timer.js';

window.addEventListener('DOMContentLoaded', () => {
    //--Табы
    let tab = document.querySelectorAll('.info-header-tab'),
        infoHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    //--ТАЙМЕР
    let timer = document.getElementById('timer'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    tabSel(tab,infoHeader,tabContent);
    let deadline = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1, 0,0,0);
    timerTick(hours,minutes,seconds, deadline);

});


