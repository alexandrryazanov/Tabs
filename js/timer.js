//--Ф-ия проверяет строку на двузначность, и добавляет 0 в начале, если надо
function str2sign(a) {
    let str = String(a); //--если не строка приводим к строке
    return (str.length<2) ? '0'+str : str;
}

//--Ф-ия тик-так
function timerTick(_hours,_minutes,_seconds, deadline) {
    let timerID = setInterval(function() {
        let date = new Date(),
            delta = Date.parse(deadline) - Date.parse(new Date()), //--кол-во милисекунд до дедлайна
            remS = String(Math.floor((delta/1000) % 60)),
            remM = String(Math.floor((delta/1000/60) % 60)),
            remH = String(Math.floor(delta/1000/60/60));

        _hours.textContent = str2sign(remH);
        _minutes.textContent = str2sign(remM);
        _seconds.textContent = str2sign(remS);

        if (delta <= 0) clearInterval(timerID);
    }, 1000);
    return timerID;
}

export { timerTick }; // список экспортируемых ф-ий