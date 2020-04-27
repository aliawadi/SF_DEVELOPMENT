import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {

    pageno;

    handlePrevious(){
        this.dispatchEvent(new CustomEvent('previous'));
    }

    handleNext(){
        this.dispatchEvent(new CustomEvent('next'));
    }

    handleDisplay(){
        this.dispatchEvent(new CustomEvent('display',
        {
            detail:{name:"ALI JAWADI" ,pageno:this.pageno, message:"Just Check this"}
        }
        )
        );
    }
}