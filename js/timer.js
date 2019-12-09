//-- Ф-ия устанавливает стартовые значение при открытии странички (остаток до конца дня)
function startTimerVal(_hours,_minutes,_seconds) {
    let date = new Date(),
        curH = date.getHours(),
        curM = date.getMinutes(),
        curS = date.getSeconds();
    
    let remH = String(24 - curH - 1),
        remM = String(60 - curM - 1),
        remS = String(60 - curS);

    _hours.textContent = str2sign(remH);
    _minutes.textContent = str2sign(remM);
    _seconds.textContent = str2sign(remS);
}

//--Ф-ия проверяет строку на двузначность, и добавляет 0 в начале, если надо
function str2sign(a) {
    let str = String(a); //--если не строка приводим к строке
    return (str.length<2) ? '0'+str : str;
}

//--Ф-ия тик-так
function timerTick(_hours,_minutes,_seconds) {
    let timerID = setInterval(function() {
        //--Секунды
        if (_seconds.textContent != '00') {
            _seconds.textContent = str2sign(+_seconds.textContent - 1);
        } else {
            _minutes.textContent = str2sign(+_minutes.textContent - 1);
            _seconds.textContent = '59';
        }
        if (_minutes.textContent == '-1') {
            _hours.textContent = str2sign(+_hours.textContent - 1);
            _minutes.textContent = '59';
        }
        if (_seconds.textContent == '00' && _minutes.textContent == '00' && _hours.textContent == '00') {
            clearInterval(timerID);
        }
    }, 1000);
    return timerID;
}

export { startTimerVal,timerTick }; // список экспортируемых ф-ий