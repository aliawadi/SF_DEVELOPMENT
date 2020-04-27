import { LightningElement,api } from 'lwc';

export default class LwcUsedInAura extends LightningElement {

    @api
    lwcProperty;

    @api
    lwcMethod(message){
        console.log('GOT THE MESSAGE FROM AURA '+message);
        return 'HELLO FROM LWC METHOD';
    }

    handleClick(event){
            const lwcEvent=new CustomEvent('lwcevent',
            {
                detail:{message:"Simple Message from LWC"}
            })
            this.dispatchEvent(lwcEvent);
    }
}