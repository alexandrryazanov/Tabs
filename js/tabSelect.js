function tabSel (tabBtnClass,tabParentClass,tabContentClass) {
    //--Ф-ия скрывает табы начиная с StartPos
    function hideTabContent(startPos) {
        for (let i = startPos; i < tabContentClass.length; i++) {
            tabContentClass[i].classList.remove('show'); //--не показываем
            tabContentClass[i].classList.add('hide'); //-- скрываем     
        }
    }  
    hideTabContent(1); //-- скрываем все кроме 1-го

    //--Ф-ия отображает таб elem
    function showTabContent(elem) {
        if (tabContentClass[elem].classList.contains('hide')) {
            tabContentClass[elem].classList.remove('hide'); //--удаляем тег скрытия
            tabContentClass[elem].classList.add('show'); //-- показываем тег show 
        }
    }

    //--Обработка клика на таб
    tabParentClass.addEventListener('click',(e) => {
        //-- заменить аругмент в кавычках
        if (e.target && e.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabBtnClass.length; i++) {
                if (e.target == tabBtnClass[i]) {
                    hideTabContent(0); //-- скрываем все
                    showTabContent(i); //-- показываем нужный
                    break;
                }
            }
        }
    });
}

export { tabSel }; // список экспортируемых ф-ий

