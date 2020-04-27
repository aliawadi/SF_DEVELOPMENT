import { LightningElement } from 'lwc';

export default class CustomEventHandler extends LightningElement {
    page=1;

    handlePrevious(){
        if(this.page>1){
        this.page=this.page - 1;
    }
}

    
    handleNext(){
        this.page=this.page + 1;
    }

    handleDisplay(event){
        const pageno=event.detail.pageno;
        const message=event.detail.message;
        const name = event.detail.name;

        alert('We recieved from Child '+pageno+' '+ message +' '+name);
    }
}