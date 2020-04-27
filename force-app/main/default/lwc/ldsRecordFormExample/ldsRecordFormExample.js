import { LightningElement ,api} from 'lwc';

export default class LdsRecordFormExample extends LightningElement {
    @api recordId;

    handleSucess(event){
        alert('AND U GOT SUCESS');
    }
}