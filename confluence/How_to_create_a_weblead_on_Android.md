# How to create a weblead on Android

``` java
Vivocha.createWeblead(Vivocha.getDataCollection(), "email@example.com", new VivochaContactCreationCallback() {


    @Override
    public void onCreationSuccess(VivochaContact contact) {
        //WebLead created!
    }


    @Override
    public void onCreationFailure() {
        //There was an error creating the weblead!
    }

});
```
