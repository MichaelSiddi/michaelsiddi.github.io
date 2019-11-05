# How to create a weblead on iOS

``` cpp
[Vivocha createWebLeadWithDataCollection:[Vivocha getDataCollection] andEmail:@"email@example.com" andCompletionBlock:^(VivochaContact *contact) {
    if(contact){
        //WebLead created!
    }
    else{
        //There was an error creating the weblead!
    }
}];
```
