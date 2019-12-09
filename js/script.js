import { tabSel } from './tabSelect.js';
import { startTimerVal,timerTick } from './timer.js';

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
    startTimerVal(hours,minutes,seconds);
    timerTick(hours,minutes,seconds);
});


