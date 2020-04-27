import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    message='Change me ';

    handleOnChange(event){
        this.message=event.target.value;
        //this.message='Non Reactive Property';
    }
}