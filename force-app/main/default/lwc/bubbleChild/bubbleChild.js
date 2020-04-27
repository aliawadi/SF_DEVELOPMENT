import { LightningElement,api } from 'lwc';

export default class BubbleChild extends LightningElement {

    @api contact;

    connectedCallback(){
        console.log('Inside Child JS --'+this.contact);
    }


    handleSelect(event){
        event.preventDefault();

        const selectEvent = new CustomEvent(  'selectcontact',
                {
                     bubbles: true
                }

        );

        this.dispatchEvent(selectEvent);
    }

}