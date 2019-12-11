export class PopUp {
    constructor(Selector) {
        this.wind = document.querySelector(Selector);
        this.form = this.wind.querySelector('form');
        this.btnClose = this.wind.querySelector('.popup-close');
        this.btnClose.addEventListener('click',()=>this.hide());
        this.btnOk = this.wind.querySelector('button');
        this.form.addEventListener('submit',(event)=>this.frmSubmit(event));
        this.tel = this.wind.querySelectorAll('input')[0];

        this.request = new XMLHttpRequest();
        this.request.addEventListener('readystatechange',()=>this.getServerStatus());
    }

    show() {this.wind.style.display = 'block';document.body.style.overflow='hidden';}
    hide() {this.wind.style.display = 'none';document.body.style.overflow=''}

    frmSubmit(e) {
        e.preventDefault();
        
        //--получаем данные из формы
        let frmData = new FormData(this.form), 
            frmDataObj = {};                                
        frmData.forEach((value,key) => frmDataObj[key] = value);//--Преобразуем в объект для дальнейшего преобразование в JSON
        let frmDataJSON = JSON.stringify(frmDataObj);           //--JSON

        //--Коннектимся и передаем
        this.request.open('GET', 'server.php');
        this.request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        this.request.send(frmDataJSON);
    }

    getServerStatus() {
        if (this.request.readyState==4 && this.request.status==200) {
            swal("Заявка отправлена!", "Мы свяжемся с Вами в ближайшее время!", "success")
                .then(()=>{
                    this.tel.value = '';
                });
            
        }
    }
}