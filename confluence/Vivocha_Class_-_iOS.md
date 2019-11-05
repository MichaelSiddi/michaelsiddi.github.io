# Vivocha Class - iOS

# **Vivocha Class Reference**

 

-   [Class Methods](#VivochaClass-iOS-ClassMethods)
    -   [+ (BOOL)startWithAccountID:(NSString \*)accountID
        andServID:(NSString
        \*)servID](#VivochaClass-iOS-+(BOOL)startWithAccountID:(NSString*)accountIDandServID:(NSString*)servID)
    -   [+ (BOOL)startAutomatic:(BOOL)automatic withAccountID:(NSString
        \*)accountID andServID:(NSString
        \*)servID](#VivochaClass-iOS-+(BOOL)startAutomatic:(BOOL)automaticwithAccountID:(NSString*)accountIDandServID:(NSString*)servID)
    -   [+ (BOOL)stop](#VivochaClass-iOS-+(BOOL)stop)
    -   [+ (void)setDataCollection:(VivochaDataCollection
        \*)dataCollection](#VivochaClass-iOS-+(void)setDataCollection:(VivochaDataCollection*)dataCollection)
    -   [+
        (void)setContactColor:(VivochaContactColor)color](#VivochaClass-iOS-+(void)setContactColor:(VivochaContactColor)color)
    -   [+ (void)setTheme:(VivochaTheme
        \*)theme](#VivochaClass-iOS-+(void)setTheme:(VivochaTheme*)theme)
    -   [+ (VivochaTheme
        \*)getTheme](#VivochaClass-iOS-+(VivochaTheme*)getTheme)
    -   [+
        (void)showChatButton](#VivochaClass-iOS-+(void)showChatButton)
    -   [+
        (void)hideChatButton](#VivochaClass-iOS-+(void)hideChatButton)
    -   [+ (void)notifyNewPage:(VivochaPage
        \*)page](#VivochaClass-iOS-+(void)notifyNewPage:(VivochaPage*)page)
    -   [+ (VivochaContact
        \*)contact](#VivochaClass-iOS-+(VivochaContact*)contact)
    -   [+ (void)createChatWithDataCollection:(VivochaDataCollection
        \*)dataCollection andCompletionBlock:(void ( ^ ) (
        VivochaContact \*contact
        ))completionBlock](#VivochaClass-iOS-+(void)createChatWithDataCollection:(VivochaDataCollection*)dataCollectionandCompletionBlock:(void(%5E)(VivochaContact*contact))completionBlock)
    -   [+ (void)createContactWithDataCollection:(VivochaDataCollection
        \*)dataCollection andType:(NSString \*)type
        andParams:(NSDictionary \*)paramsDict
        andCompletionBlock:(void(^)(VivochaContact \*
        contact))completionBlock](#VivochaClass-iOS-+(void)createContactWithDataCollection:(VivochaDataCollection*)dataCollectionandType:(NSString*)typeandParams:(NSDictionary*)paramsDictandCompletionBlock:(void(%5E)(VivochaContact*contact))completionBlock)
    -   [+ (void)createWebLeadWithDataCollection:(VivochaDataCollection
        \*)dataCollection andEmail:(NSString \*)email
        andCompletionBlock:(void(^)(VivochaContact \*
        contact))completionBlock](#VivochaClass-iOS-+(void)createWebLeadWithDataCollection:(VivochaDataCollection*)dataCollectionandEmail:(NSString*)emailandCompletionBlock:(void(%5E)(VivochaContact*contact))completionBlock)
    -   [+
        (void)createCallBackNowWithDataCollection:(VivochaDataCollection
        \*)dataCollection andPhoneNumber:(NSString \*)phoneNumber
        andCompletionBlock:(void(^)(VivochaContact \*
        contact))completionBlock](#VivochaClass-iOS-+(void)createCallBackNowWithDataCollection:(VivochaDataCollection*)dataCollectionandPhoneNumber:(NSString*)phoneNumberandCompletionBlock:(void(%5E)(VivochaContact*contact))completionBlock)
    -   [+ (void)setPushTokenWithData:(NSData
        \*)tokenData](#VivochaClass-iOS-+(void)setPushTokenWithData:(NSData*)tokenData)
    -   [+
        (void)setBlockSideButton:(BOOL)block](#VivochaClass-iOS-+(void)setBlockSideButton:(BOOL)block)
    -   [+ (void)setChatHeaderImage:(UIImage
        \*)logoImage](#VivochaClass-iOS-+(void)setChatHeaderImage:(UIImage*)logoImage)
    -   [+ (void) addLocalization:(VivochaLocalization
        \*)localization](#VivochaClass-iOS-+(void)addLocalization:(VivochaLocalization*)localization)
    -   [+ (NSString \*)getVVCU](#VivochaClass-iOS-+(NSString*)getVVCU)
    -   [+ (NSString \*)getVVCT](#VivochaClass-iOS-+(NSString*)getVVCT)
-   [Instance Methods](#VivochaClass-iOS-InstanceMethods)
    -   [- (void)bindAction:(NSString \*)actionName withBlock:(void ( ^
        ) ( VivochaCustomAction \*action
        ))block](#VivochaClass-iOS--(void)bindAction:(NSString*)actionNamewithBlock:(void(%5E)(VivochaCustomAction*action))block)
    -   [- (void)
        disableLocationFeature](#VivochaClass-iOS--(void)disableLocationFeature)
    -   [-
        (void) disableScreenshotFeature](#VivochaClass-iOS--(void)disableScreenshotFeature)
    -   [-
        (void) disableCannedQuestionFeature](#VivochaClass-iOS--(void)disableCannedQuestionFeature)
    -   [-
        (void) disableAudioVideoFeature](#VivochaClass-iOS--(void)disableAudioVideoFeature)
    -   [- (void) overrideLanguage:(NSString
        \*)lang](#VivochaClass-iOS--(void)overrideLanguage:(NSString*)lang)
    -   [-
        (void) notifyCustomEngagementButtonShown](#VivochaClass-iOS--(void)notifyCustomEngagementButtonShown)
    -   [-
        (void) notifyCustomEngagementButtonHidden](#VivochaClass-iOS--(void)notifyCustomEngagementButtonHidden)

  

**  
**

## **Class Methods**

**+ (Vivocha \*)manager**

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (Vivocha *)manager</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Returns the Vivocha manager that retains all the objects that Vivocha needs to work correctly.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>the Vivocha singleton.</code></pre></td>
</tr>
</tbody>
</table>

     

### + (BOOL)startWithAccountID:(NSString \*)accountID andServID:(NSString \*)servID

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (BOOL)startWithAccountID:(NSString *)accountID andServID:(NSString *)servID</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code> Starts Vivocha using the accountID and ServiceID.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>accountID - Your Vivocha accountID (e.g. vivocha.com/a/YOUR_ACCOUNT_ID/login)</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>servID - The serviceID for this application. You will find the ID in the iOS foundry inside the Agent Desktop’s settings.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>YES if Vivocha started correctly, NO otherwise.</code></pre></td>
</tr>
</tbody>
</table>

     

### + (BOOL)startAutomatic:(BOOL)automatic withAccountID:(NSString \*)accountID andServID:(NSString \*)servID

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (BOOL)startAutomatic:(BOOL)automatic withAccountID:(NSString *)accountID andServID:(NSString *)servID</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code> Starts Vivocha using the accountID and ServiceID.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>automatic - If YES Vivocha will automatically add itself as a listener for </code></pre>
<pre><code>    application:didReceiveRemoteNotification:fetchCompletionHandler: </code></pre>
<pre><code>    application:didRegisterForRemoteNotificationsWithDeviceToken: </code></pre>
<pre><code>    application:didFailToRegisterForRemoteNotificationsWithError: </code></pre>
<pre><code>    otherwise you will need to add some other Vivocha method calls inside your application delegate’s methods.</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>accountID - Your Vivocha accountID (e.g. vivocha.com/a/YOUR_ACCOUNT_ID/login)</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>servID - The serviceID for this application. You will find the ID in the iOS foundry inside the Agent Desktop’s settings.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>YES if Vivocha started correctly, NO otherwise.</code></pre></td>
</tr>
<tr class="even">
<td>See Also</td>
</tr>
<tr class="odd">
<td><pre><code>+ setPushTokenWithData:</code></pre></td>
</tr>
</tbody>
</table>

     

### + (BOOL)stop

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (BOOL)stop</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code> Stops Vivocha</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>YES if Vivocha stops correctly, NO otherwise</code></pre></td>
</tr>
</tbody>
</table>

     

### + (void)setDataCollection:(VivochaDataCollection \*)dataCollection

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void)setDataCollection:(VivochaDataCollection *)dataCollection</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Set the data collection that will be sent when a new contact is requested.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>dataCollection - a VivochaDataCollection object.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### + (void)setContactColor:(VivochaContactColor)color

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void)setContactColor:(VivochaContactColor)color</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Set the contact color that the agent will see when a new contact has been started from the current application.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>color - A VivochaContactColor value (e.g. VivochaContactColorOrange);</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

     

### + (void)setTheme:(VivochaTheme \*)theme

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void)setTheme:(VivochaTheme *)theme</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Set the local theme for the chat and side button</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>theme - your local theme.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

     

### **+ (VivochaTheme \*)getTheme**

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (VivochaTheme *)getTheme</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Returns your local theme that was set by the setTheme: method.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>The local theme.</code></pre></td>
</tr>
</tbody>
</table>

     

### + (void)showChatButton

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void)showChatButton</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code> Shows the side tab button.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### **+ (void)hideChatButton**

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void)hideChatButton</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Hides the side tab button.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

     

### + (void)notifyNewPage:(VivochaPage \*)page

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void)notifyNewPage:(VivochaPage *)page</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>If a contact is in progress notifies the agent that the user moves to a different view controller.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>page - The current page.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

**  
**

### + (VivochaContact \*)contact

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (VivochaContact *)contact</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>If a contact is in progress, returns the contact object, otherwise returns nil.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>The current contact.</code></pre></td>
</tr>
</tbody>
</table>

 

### **+ (void)createChatWithDataCollection:(VivochaDataCollection \*)dataCollection andCompletionBlock:(void ( ^ ) ( VivochaContact \*contact ))completionBlock**

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void)createChatWithDataCollection:(VivochaDataCollection *)dataCollection andCompletionBlock:(void ( ^ ) ( VivochaContact *contact ))completionBlock</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Creates a new contact.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>dataCollection - the data collection.</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>completionBlock - when the request is completed, the completion block will be execute.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### + (void)createContactWithDataCollection:(VivochaDataCollection \*)dataCollection andType:(NSString \*)type andParams:(NSDictionary \*)paramsDict andCompletionBlock:(void(^)(VivochaContact \* contact))completionBlock

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void) createContactWithDataCollection:(VivochaDataCollection *)dataCollection andType:(NSString *)type andParams:(NSDictionary *)paramsDict andCompletionBlock:(void(^)(VivochaContact * contact))completionBlock</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Creates a new contact of the specified type with the passed parameters.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>dataCollection - the data collection.</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>type - the contact type to be created.</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>params - the parameters needed for the given type of contact (e.g. &#39;uri&#39; for &#39;weblead&#39;)</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>completionBlock - when the request is completed, the completion block will be execute.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### + (void)createWebLeadWithDataCollection:(VivochaDataCollection \*)dataCollection andEmail:(NSString \*)email andCompletionBlock:(void(^)(VivochaContact \* contact))completionBlock

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void) createWebLeadWithDataCollection:(VivochaDataCollection *)dataCollection andEmail:(NSString *)email andCompletionBlock:(void(^)(VivochaContact * contact))completionBlock</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Creates a new WebLead with the specified email address.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>dataCollection - the data collection.</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>email - the email address.</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>completionBlock - when the request is completed, the completion block will be execute.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### + (void)createCallBackNowWithDataCollection:(VivochaDataCollection \*)dataCollection andPhoneNumber:(NSString \*)phoneNumber andCompletionBlock:(void(^)(VivochaContact \* contact))completionBlock

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void) createCallBackNowWithDataCollection:(VivochaDataCollection *)dataCollection andPhoneNumber:(NSString *)phoneNumber andCompletionBlock:(void(^)(VivochaContact * contact))completionBlock</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Creates a new CallBack Now with the specified phone number.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>dataCollection - the data collection.</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>phoneNumber - the phone number.</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>completionBlock - when the request is completed, the completion block will be execute.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### + (void)setPushTokenWithData:(NSData \*)tokenData

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void)setPushTokenWithData:(NSData *)tokenData</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Enables Vivocha to send push notifications to the current device. If you started Vivocha with ‘automatic’ set to NO, you need to call this method in your Application Delegate application:didRegisterForRemoteNotificationsWithDeviceToken: method</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>tokenData - the token data received from the application:didRegisterForRemoteNotificationsWithDeviceToken: method.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### + (void)setBlockSideButton:(BOOL)block

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void)setBlockSideButton:(BOOL)block</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Blocks the appearance of the side tab button.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>block - YES if you want to prevent the appearance of the side button.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### + (void)setChatHeaderImage:(UIImage \*)logoImage

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void) setChatHeaderImage:(UIImage *)logoImage</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Sets a custom logo to be shown in the Chat View in place of the Vivocha one.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>logoImage - the UIImage object.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### + (void) addLocalization:(VivochaLocalization \*)localization

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (void) addLocalization:(VivochaLocalization *)localization</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Adds a new translation to the Vivocha UI.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>localization - the new localization.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### + (NSString \*)getVVCU

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (NSString *)getVVCU</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Exposes the VVCU for the current user.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### + (NSString \*)getVVCT

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>+ (NSString *)getVVCT</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Exposes the VVCU for the current visit.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

## ****Instance Methods****

### - (void)bindAction:(NSString \*)actionName withBlock:(void ( ^ ) ( VivochaCustomAction \*action ))block

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>- (void)bindAction:(NSString *)actionName withBlock:(void ( ^ ) ( VivochaCustomAction *action ))block</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Binds an action name with an action block. When a custom action arrives from the agent desktop, the block will be executed.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>actionName - the action name.</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>block - the action block.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### - (void) disableLocationFeature

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>- (void) disableLocationFeature</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Disables the SDK&#39;s location feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### - (void) disableScreenshotFeature

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>- (void) disableScreenshotFeature</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Disables the SDK&#39;s screenshot feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### - (void) disableCannedQuestionFeature

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>- (void) disableCannedQuestionFeature</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Disables the SDK&#39;s Canned Question feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### - (void) disableAudioVideoFeature

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>- (void) disableAudioVideoFeature</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Disables the SDK&#39;s Audio/Video call feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### - (void) overrideLanguage:(NSString \*)lang

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>- (void) overrideLanguage:(NSString *)lang</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Forces Vivocha to use a different language instead of the system&#39;s one.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>lang - the language (e.g. &quot;it&quot;)</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### - (void) notifyCustomEngagementButtonShown

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>- (void) notifyCustomEngagementButtonShown</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Notifies Vivocha that you are showing your custom engagement button instead of the automatic side tab. </code></pre>
<pre><code>This is needed to track the widgets in stats and reports.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### - (void) notifyCustomEngagementButtonHidden

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>- (void) notifyCustomEngagementButtonHidden</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Notifies Vivocha that you are hiding your custom engagement button. </code></pre>
<pre><code>This is needed to track the widgets in stats and reports.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>
