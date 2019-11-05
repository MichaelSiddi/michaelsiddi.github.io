# How to create a custom engagement button on iOS

If you don't want to use the automatic Side Tab provided by the Vivocha
iOS SDK you can use the APIs in order to manually create a Contact on
your button's click event. 

1.  Disable the automatic Side Tab adding** ** 

    ``` cpp
    [Vivocha setBlockSideButton:YES];
    ```

    before the  \[Vivocha startWithAccountID:andServID:\]  method call
    in your Application Delegate.

2.  Add a listener to the events of Agent Availability/Unavailability

    ``` cpp
    - (void) addVivochaObservers{
        id obs = [[NSNotificationCenter defaultCenter] addObserverForName:VivochaSDK_Notif_AvailableAgents object:nil queue:nil usingBlock:^(NSNotification *note) { 
                    dispatch_async(dispatch_get_main_queue(), ^{
                        self.chatButton.setUserInteractionEnabled = YES;
                        [self.chatButton setHidden:NO];
                        [[Vivocha manager] notifyCustomEngagementButtonShown];
                    });
                 }];
     
        [self.vivochaObservers addObject:obs];
     
        id obs = [[NSNotificationCenter defaultCenter] addObserverForName:VivochaSDK_Notif_UnavailableAgents object:nil queue:nil usingBlock:^(NSNotification *note) { 
                    dispatch_async(dispatch_get_main_queue(), ^{
                        self.chatButton.setUserInteractionEnabled = NO;
                        [self.chatButton setHidden:YES];
                        [[Vivocha manager] notifyCustomEngagementButtonHidden];
                    });
                 }];
     
        [self.vivochaObservers addObject:obs];
    }
    ```

    In this example the chat button is enabled and disabled accordingly
    with the received event.To remove the listeners you can use this
    code:

    ``` cpp
    - (void) clearVivochaObservers{
        for (id obs in self.vivochaObservers) {
            [[NSNotificationCenter defaultCenter] removeObserver:obs];
        }
    }
    ```

3.  A chat button action example method could be the following:

    ``` cpp
    - (void) chatButtonAction:(id)sender{
        VivochaDataCollection *dataCollection = nil;
        if (isLogged) {
            VivochaDataCollectionField *userIDField = [VivochaDataCollectionField fieldWithName:@"userID" andType:VivochaDataCollectionFieldTypeText andValue:@"LOGGED_USER_ID" andDescription:@"UserID" andIsVisibile:YES andIsChecked:NO];
            VivochaDataCollectionField *userNameField = [VivochaDataCollectionField fieldWithName:@"userName" andType:VivochaDataCollectionFieldTypeText andValue:@"LOGGED_USER_NAME" andDescription:@"Name" andIsVisibile:YES andIsChecked:NO];
            VivochaDataCollectionField *userSurnameField = [VivochaDataCollectionField fieldWithName:@"userSurname" andType:VivochaDataCollectionFieldTypeText andValue:@"LOGGED_USER_SURNAME" andDescription:@"Surname" andIsVisibile:YES andIsChecked:NO];
            VivochaDataCollectionField *userEmailField = [VivochaDataCollectionField fieldWithName:@"userMail" andType:VivochaDataCollectionFieldTypeEmail andValue:@"LOGGED_USER_EMAIL" andDescription:@"Email" andIsVisibile:YES andIsChecked:NO];
            VivochaDataCollectionField *nickNameField = [VivochaDataCollectionField fieldWithName:@"nickname" andType:VivochaDataCollectionFieldTypeNickname andValue:@"LOGGED_USER_NICKNAME" andDescription:@"Nickname" andIsVisibile:YES andIsChecked:NO];

            VivochaDataCollectionForm *aForm = [VivochaDataCollectionForm dataCollectionFormWithName:@"userData" andDescription:@"Logged User Data"];
            [aForm addField:userIDField];
            [aForm addField:userNameField];
            [aForm addField:userSurnameField];
            [aForm addField:userEmailField];
            [aForm addField:nickNameField];

            dataCollection = [VivochaDataCollection dataCollectionWithForms:@[aForm]];
        }

        if([Vivocha contact]){
            [[Vivocha contact] showView:YES]
        }
        else{
            [Vivocha createChatWithDataCollection:dataCollection andCompletionBlock:^(VivochaContact *contact) {
                if (contact) {
                    [contact showView:YES];
                }
                else{
                    //Show error
                }
            }];
        }
    }
    ```

     In this example, before the actual creation of the contact and the
    showing of the chat view, a data collection is eventually created
    with the info available inside the application.

    You can find all the available API in the Vivocha iOS SDK Reference
    here.
