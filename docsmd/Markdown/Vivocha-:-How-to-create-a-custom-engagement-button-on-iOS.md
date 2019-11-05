1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [iOS](iOS_5079111.html)
4.  [iOS How To Collection](5079105.html)

<span id="title-text"> Vivocha : How to create a custom engagement button on iOS </span>
========================================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Oct 19, 2015

If you don't want to use the automatic Side Tab provided by the Vivocha
iOS SDK you can use the APIs in order to manually create a Contact on
your button's click event. 

1.  Disable the automatic Side Tab adding** ** 

    ``` syntaxhighlighter-pre
    [Vivocha setBlockSideButton:YES];
    ```

    <span style="line-height: 1.4285715;">before the </span><span
    style="line-height: 1.4285715;">* \[Vivocha
    startWithAccountID:andServID:\]*  method call in your Application
    Delegate.</span>

      

2.  <span style="line-height: 1.4285715;">Add a listener to the events
    of Agent Availability/Unavailability</span>

    ``` syntaxhighlighter-pre
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

    <span style="line-height: 1.4285715;">In this example the chat
    button is enabled and disabled accordingly with the received
    event.  
      
    To remove the listeners you can use this code:</span>

    ``` syntaxhighlighter-pre
    - (void) clearVivochaObservers{
        for (id obs in self.vivochaObservers) {
            [[NSNotificationCenter defaultCenter] removeObserver:obs];
        }
    }
    ```

3.  <span style="line-height: 1.4285715;">A chat button action example
    method could be the following:</span>

    ``` syntaxhighlighter-pre
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

    <span style="line-height: 1.4285715;"> In this example, before the
    actual creation of the contact and the showing of the chat view, a
    data collection is eventually created with the info available inside
    the application.</span>

    <span style="line-height: 1.4285715;"><span
    style="line-height: 1.4285715;">  
    You can find all the available API in the Vivocha iOS SDK Reference
    </span>[here](iOS-SDK-Reference_1048693.html)<span
    style="line-height: 1.4285715;">.</span></span>

Document generated by Confluence on Oct 23, 2019 16:11

[Atlassian](http://www.atlassian.com/)
