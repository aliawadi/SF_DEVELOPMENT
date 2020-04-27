public with sharing class AccountController {
    public AccountController() {

    }

    @AuraEnabled(cacheable=true)
    public static Account getAccountList(){
        return [select Id,name,phone,type 
        from 
        Account
        With SECURITY_ENFORCED
        limit 20];
    }
}
