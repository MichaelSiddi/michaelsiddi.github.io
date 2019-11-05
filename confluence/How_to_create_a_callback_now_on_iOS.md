# How to create a callback now on iOS

``` cpp
[Vivocha createCallBackNowWithDataCollection:[Vivocha getDataCollection] andPhoneNumber:@"+123456789" andCompletionBlock:^(VivochaContact *contact) {

    if(contact){
        //CBN created!
    }
    else{
        //There was an error creating the callback now!
    }
}];
```
