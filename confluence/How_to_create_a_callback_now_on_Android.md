# How to create a callback now on Android

``` java
Vivocha.createCallBackNow(Vivocha.getDataCollection(), "+1555123456", new VivochaContactCreationCallback() {


    @Override
    public void onCreationSuccess(VivochaContact contact) {
        //CBN created!
    }


    @Override
    public void onCreationFailure() {
        //There was an error creating the callback now!
    }

});
```
