import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'

export default class BubbleParent extends LightningElement {

    selectedContact;

    @wire(getContactList)
    contacts;

    connectedCallback(){
        console.log('Waht is Contacts--'+this.contacts);
    }

    handleSelectContact(event){

        this.selectedContact=event.target.contact;
    }
}