import { LightningElement } from 'lwc';

export default class LifeCycleHookExample extends LightningElement {

    counter;
    test;
    constructor(){
        super();
        console.log('Inside Constructor -->'+parseInt(this.counter)+1);
    }

    connectedCallback(){
        console.log('Inside connectedCallback -->'+parseInt(this.counter)+1);
    }

    
    renderedCallback(){
        console.log('Inside renderedCallback -->'+parseInt(this.counter)+1);
    }

    disconnectedCallback(){
        console.log('Inside disconnectedCallback -->'+parseInt(this.counter)+1);
    }

    errorCallback(error,stack){
        console.error('Inside errorCallback -->'+parseInt(this.counter)+1);
    }

    handleChange(event){
        this.test=event.target.value;
        console.error('Inside handleChange -->'+parseInt(this.counter)+1);

    }
}