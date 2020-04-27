import { LightningElement,api,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class ContactList extends NavigationMixin(LightningElement) {
    @api contact;


    navigateToContact(){
        console.log('What is contact id  : '+this.contact.Id);
        this[NavigationMixin.Navigate](
            {
                type: 'standard__recordPage',
                attributes:{
                    recordId: this.contact.Id,
                    objectApiName: 'Applicant__c',
                    actionName: 'new'

                }
            }
        );
    }

    navigateToContact1() {
        console.log('What is contact id 1 : '+this.contact.Id);
        console.log('What is contact id 2 : '+this.recordPageUrl);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contact.Id,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }


    @track
    recordPageUrl;

    connectedCallback() {
        // Generate a URL to a User record page
        console.log('Inside Connected CAllback---');
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName: 'Contact',
                recordId: '0039D000005y8qEQAQ',
                actionName: 'view',
            },
        }).then(url => {
            this.recordPageUrl = url;
            console.log('Inside Connected CAllback- 2--'+this.recordPageUrl);
        });
    }

}