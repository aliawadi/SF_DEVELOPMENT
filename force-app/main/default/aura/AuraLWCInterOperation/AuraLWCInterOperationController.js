({
    handleLWCEvent : function(component, event, helper) {
        console.log('Insode handleLWCEvent method ');
        var filters = event.getParam('message');
        console.log('RECIEVED MESSAGE FROM LWC COMP'+filters);
        component.set('v.message', filters.length > 0 ? 'Message From LWC EVENT: ' + filters : 'No selection');
    }            ,
    callLWCMethod : function(component, event, helper) {
        var childComp = component.find('lwcComp');
        var returnValue=childComp.lwcMethod('MESSAGE RECIVED FROM AURA');
        console.log('RECIEVED MESSAGE FROM LWC METHOD'+returnValue);
        component.set('v.message2', returnValue.length > 0 ? 'Message From LWC METHOD: ' + returnValue : 'No selection');
    },
})
1