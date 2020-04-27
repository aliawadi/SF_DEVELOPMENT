import { LightningElement,api} from 'lwc';

export default class ChildComponent extends LightningElement {
    @api childItem;

      @api  
    childMethod(input){
        alert('Im Child MEthod Called by PArent'+input);
        return 'Welcome Returned from Child Method';
    }
}