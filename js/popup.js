export class PopUp {
    constructor(Selector) {
        this.wind = document.querySelector(Selector);
        this.btnClose = this.wind.querySelector('.popup-close');
        this.btnClose.addEventListener('click',()=>{
            this.hide();
        });
    }

    show() {
        this.wind.style.display = 'block';
    }
    hide() {
        this.wind.style.display = 'none';
    }
}