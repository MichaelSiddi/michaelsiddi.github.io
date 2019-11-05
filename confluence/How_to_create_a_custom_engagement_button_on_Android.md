# How to create a custom engagement button on Android

If you don't want to use the automatic Side Tab provided by the Vivocha
Android SDK you can use the APIs in order to manually create a Contact
on your button's click event.

1.  Disable the automatic Side Tab adding** ** 

    ``` java
    Vivocha.setBlockSideButton(true);
    ```

    before the Vivocha.start() method call in the onStart() method in
    your application's main Activity.

2.  Add a listener to the events of Agent Availability/Unavailability

    ``` java
    void addVivochaListener(){
        Vivocha.manager().setCallbacks(new VivochaCallbacks() {
                @Override
                public void onNewAgentData(boolean available, int numberOfChats) {
                    buttonChat.setEnabled(available);
                    
                    if(available){
                        buttonChat.setVisibility(View.VISIBLE);
                        Vivocha.manager().notifyCustomEngagementButtonShown(); //Notify the Vivocha Console that the custom button was shown
                    }
                    else{
                        buttonChat.setVisibility(View.GONE);
                        Vivocha.manager().notifyCustomEngagementButtonHidden(); //Notify the Vivocha Console that the custom button was hidden
                    }
                }
        });
    }
    ```

    In this example the chat button is enabled and disabled accordingly
    with the received event.To remove the listeners you can use this
    code:

    ``` java
    void removeVivochaListener(){
        Vivocha.manager().setCallbacks(null);
    }
    ```

3.  A chat button action example method could be the following:

    ``` java
    void buttonChatAction(){
        VivochaDataCollection dataCollection = null;
        if(isLogged){
            VivochaDataCollectionField userIdField      = new VivochaDataCollectionField("userID",        VivochaValues.VivochaDataCollectionFieldTypeText, "LOGGED_USER_ID", "UserID", true, false);
            VivochaDataCollectionField userNameField    = new VivochaDataCollectionField("userName",  VivochaValues.VivochaDataCollectionFieldTypeText, "LOGGED_USER_NAME", "Name", true, false);
            VivochaDataCollectionField userSurnameField = new VivochaDataCollectionField("userSurname", VivochaValues.VivochaDataCollectionFieldTypeText, "LOGGED_USER_SURNAME", "Surname", true, false);
            VivochaDataCollectionField userEmailField   = new VivochaDataCollectionField("userMail",  VivochaValues.VivochaDataCollectionFieldTypeEmail,"LOGGED_USER_EMAIL", "Email", true, false);
            VivochaDataCollectionField nickNameField    = new VivochaDataCollectionField("nickname",  VivochaValues.VivochaDataCollectionFieldTypeNickname,"LOGGED_USER_NICKNAME", "Nickname", true, false);

            VivochaDataCollectionForm aForm = new VivochaDataCollectionForm();
            aForm.name = "userData";
            aForm.description = "Logged User Data";
            
            aForm.addField(userIdField);
            aForm.addField(userNameField);
            aForm.addField(userSurnameField);
            aForm.addField(userEmailField);
            aForm.addField(nickNameField);

            dataCollection = new VivochaDataCollection();
            dataCollection.addForm(aForm);
        }
                
        if(Vivocha.getContact() != null){
            Vivocha.getContact().showView(true);
        }
        else{
            Vivocha.createChat(dataCollection, new VivochaContactCreationCallback() {
                    
                @Override
                public void onCreationSuccess(VivochaContact contact) {
                    if(contact != null){
                        contact.connect();
                        contact.showView(true);
                    }
                }
                    
                @Override
                public void onCreationFailure() {
                    //Show error
                }
            });
        }
        
    }
    ```

    In this example, before the actual creation of the contact and the
    showing of the chat view, a data collection is eventually created
    with the info available inside the application.

     

    You can find all the available API in the Vivocha Android SDK
    Reference here.
