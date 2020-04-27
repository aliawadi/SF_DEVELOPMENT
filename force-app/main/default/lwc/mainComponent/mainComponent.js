import { LightningElement } from 'lwc';
import getSearchContacts from '@salesforce/apex/ContactController.getSearchContacts';

const DELAY=350;

export default class MainComponent extends LightningElement {
contacts;
error;


handleSearchEvent(event){
    window.clearTimeout(this.delayTimeout);
    const searchKey = event.target.value;
  
  this.delayTimeout = setTimeout(() => {
    getSearchContacts({ searchKey })
                .then(result => {
                    this.contacts = result;
                    this.error = undefined;
                })
                .catch(error => {
                    this.error = error;
                    this.contacts = undefined;
                });
        }, DELAY);
    }

}