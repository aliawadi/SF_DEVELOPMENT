import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {

returnValue;
    handleClick(){
        this.returnValue=this.template.querySelector('c-child-component').childMethod('Greetings From Parent');
    }
}