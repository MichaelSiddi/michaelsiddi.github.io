1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [iOS](iOS_5079111.html)
4.  [iOS SDK Reference](iOS-SDK-Reference_1048693.html)

<span id="title-text"> Vivocha : Vivocha Class - iOS </span>
============================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Jun 17, 2015

**Vivocha Class Reference**
===========================

 

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

**Class Methods**
-----------------

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>+ (Vivocha <span class="kw">*</span>)manager</span></code></pre></div></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Returns the Vivocha manager that retains all the objects that Vivocha needs to work correctly.</code></pre></td>
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

``` p2
 
```

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
<td><pre class="p2"><code>+ (BOOL)startWithAccountID:(NSString *)accountID andServID:(NSString *)servID</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code> Starts Vivocha using the accountID and ServiceID.</code></pre></td>
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

``` p2
 
```

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
<td><pre class="p2"><code>+ (BOOL)startAutomatic:(BOOL)automatic withAccountID:(NSString *)accountID andServID:(NSString *)servID</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code> Starts Vivocha using the accountID and ServiceID.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre class="p3"><code>automatic - If YES Vivocha will automatically add itself as a listener for </code></pre>
<pre class="p3"><code>    application:didReceiveRemoteNotification:fetchCompletionHandler: </code></pre>
<pre class="p3"><code>    application:didRegisterForRemoteNotificationsWithDeviceToken: </code></pre>
<pre class="p3"><code>    application:didFailToRegisterForRemoteNotificationsWithError: </code></pre>
<pre class="p3"><code>    otherwise you will need to add some other Vivocha method calls inside your application delegate’s methods.</code></pre></td>
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
<td><pre class="p3"><code>+ setPushTokenWithData:</code></pre></td>
</tr>
</tbody>
</table>

``` p2
 
```

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
<td><pre class="p2"><code>+ (BOOL)stop</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code> Stops Vivocha</code></pre></td>
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

``` p2
 
```

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
<td><pre class="p2"><code>+ (void)setDataCollection:(VivochaDataCollection *)dataCollection</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Set the data collection that will be sent when a new contact is requested.</code></pre></td>
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

<span class="s1">  
</span>

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
<td><pre class="p2"><code>+ (void)setContactColor:(VivochaContactColor)color</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Set the contact color that the agent will see when a new contact has been started from the current application.</code></pre></td>
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

``` p2
 
```

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
<td><pre class="p2"><code>+ (void)setTheme:(VivochaTheme *)theme</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Set the local theme for the chat and side button</code></pre></td>
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

``` p2
 
```

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
<td><pre class="p2"><code>+ (VivochaTheme *)getTheme</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Returns your local theme that was set by the setTheme: method.</code></pre></td>
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

``` p2
 
```

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
<td><pre class="p2"><code>+ (void)showChatButton</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code> Shows the side tab button.</code></pre></td>
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
<td><pre class="p2"><code>+ (void)hideChatButton</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Hides the side tab button.</code></pre></td>
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

``` p2
 
```

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
<td><pre class="p2"><code>+ (void)notifyNewPage:(VivochaPage *)page</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>If a contact is in progress notifies the agent that the user moves to a different view controller.</code></pre></td>
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
<td><pre class="p2"><code>+ (VivochaContact *)contact</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>If a contact is in progress, returns the contact object, otherwise returns nil.</code></pre></td>
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
<td><pre class="p2"><code>The current contact.</code></pre></td>
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
<td><pre class="p2"><code>+ (void)createChatWithDataCollection:(VivochaDataCollection *)dataCollection andCompletionBlock:(void ( ^ ) ( VivochaContact *contact ))completionBlock</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Creates a new contact.</code></pre></td>
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
<td><pre class="p2"><code>+ (void) createContactWithDataCollection:(VivochaDataCollection *)dataCollection andType:(NSString *)type andParams:(NSDictionary *)paramsDict andCompletionBlock:(void(^)(VivochaContact * contact))completionBlock</code></pre></td>
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
<td><pre class="p2"><code>+ (void) createWebLeadWithDataCollection:(VivochaDataCollection *)dataCollection andEmail:(NSString *)email andCompletionBlock:(void(^)(VivochaContact * contact))completionBlock</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Creates a new WebLead with the specified email address.</code></pre></td>
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
<td><pre class="p2"><code>+ (void) createCallBackNowWithDataCollection:(VivochaDataCollection *)dataCollection andPhoneNumber:(NSString *)phoneNumber andCompletionBlock:(void(^)(VivochaContact * contact))completionBlock</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Creates a new CallBack Now with the specified phone number.</code></pre></td>
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
<td><pre class="p2"><code>+ (void)setPushTokenWithData:(NSData *)tokenData</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Enables Vivocha to send push notifications to the current device. If you started Vivocha with ‘automatic’ set to NO, you need to call this method in your Application Delegate application:didRegisterForRemoteNotificationsWithDeviceToken: method</code></pre></td>
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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>+ (void)setBlockSideButton:(BOOL)block</span></code></pre></div></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Blocks the appearance of the side tab button.</code></pre></td>
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
<td><pre class="p1"><code>+ (void) setChatHeaderImage:(UIImage *)logoImage</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>Sets a custom logo to be shown in the Chat View in place of the Vivocha one.</code></pre></td>
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

### + (<span class="s1">void</span>) addLocalization:(<span class="s2">VivochaLocalization</span> \*)localization

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
<td><pre class="p1"><code>+ (void) addLocalization:(VivochaLocalization *)localization</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>Adds a new translation to the Vivocha UI.</code></pre></td>
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
<td><pre class="p1"><code>+ (NSString *)getVVCU</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>Exposes the VVCU for the current user.</code></pre></td>
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
<td><pre class="p1"><code>+ (NSString *)getVVCT</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>Exposes the VVCU for the current visit.</code></pre></td>
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

****Instance Methods****
------------------------

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
<td><pre class="p2"><code>- (void)bindAction:(NSString *)actionName withBlock:(void ( ^ ) ( VivochaCustomAction *action ))block</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Binds an action name with an action block. When a custom action arrives from the agent desktop, the block will be executed.</code></pre></td>
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
<td><pre class="p2"><code>- (void) disableLocationFeature</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Disables the SDK&#39;s location feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
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
<td><pre class="p2"><code>- (void) disableScreenshotFeature</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Disables the SDK&#39;s screenshot feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
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
<td><pre class="p2"><code>- (void) disableCannedQuestionFeature</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Disables the SDK&#39;s Canned Question feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
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
<td><pre class="p2"><code>- (void) disableAudioVideoFeature</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Disables the SDK&#39;s Audio/Video call feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
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
<td><pre class="p2"><code>- (void) overrideLanguage:(NSString *)lang</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Forces Vivocha to use a different language instead of the system&#39;s one.</code></pre></td>
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
<td><pre class="p2"><code>- (void) notifyCustomEngagementButtonShown</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Notifies Vivocha that you are showing your custom engagement button instead of the automatic side tab. </code></pre>
<pre class="p2"><code>This is needed to track the widgets in stats and reports.</code></pre></td>
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
<td><pre class="p2"><code>- (void) notifyCustomEngagementButtonHidden</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Notifies Vivocha that you are hiding your custom engagement button. </code></pre>
<pre class="p2"><code>This is needed to track the widgets in stats and reports.</code></pre></td>
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

Document generated by Confluence on Oct 23, 2019 16:11

[Atlassian](http://www.atlassian.com/)
