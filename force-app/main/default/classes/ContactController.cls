public with sharing class ContactController {
   
    @AuraEnabled(Cacheable=true)
    public static List<Contact> getSearchContacts(String searchKey){
         String key='%' + searchKey +'%';
        return
        [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact
            WHERE Name LIKE :key 
            WITH SECURITY_ENFORCED
            LIMIT 50
        ];
    }

    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContactList(){
      
        return
        [
            select Id, Name, Title, Phone, Email
            from Contact
           
            
        ];
    }
}
