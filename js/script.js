import { tabSel } from './tabSelect.js';

window.addEventListener('DOMContentLoaded', () => {
    let tab = document.querySelectorAll('.info-header-tab'),
        infoHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    tabSel(tab,infoHeader,tabContent);

});


