import { LightningElement ,track} from 'lwc';

export default class CalculatorComp extends LightningElement {
   
     number1;
     number2;
     result;

    handleChangeEvent(event){
        const val=event.target.value;
        console.log('Inside ChnageEvent Method---'+val);
        const name= event.target.name;
        if(name === 'number1'){
            this.number1=val;
        }else{
            this.number2=val;
        }
    }

    doAdd(){
        this.result=parseInt(this.number1)+parseInt(this.number2);
        alert("Sum is : "+this.result);
    }
    
    doSubract(){
        this.result=parseInt(this.number1) - parseInt(this.number2);
        alert("Subr is : "+this.result);
    }
}