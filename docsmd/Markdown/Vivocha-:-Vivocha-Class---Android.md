1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [Android](Android_5079113.html)
4.  [Android SDK Reference](Android-SDK-Reference_1048613.html)

<span id="title-text"> Vivocha : Vivocha Class - Android </span>
================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Jun 17, 2015

**Vivocha Class Reference**
===========================

 

-   [Class Methods](#VivochaClass-Android-ClassMethods)
    -   [static Vivocha
        manager()](#VivochaClass-Android-staticVivochamanager())
    -   [static boolean start(Activity activity, java.lang.String
        acct\_id, java.lang.String
        serv\_id)](#VivochaClass-Android-staticbooleanstart(Activityactivity,java.lang.Stringacct_id,java.lang.Stringserv_id))
    -   [static boolean
        stop()](#VivochaClass-Android-staticbooleanstop())
    -   [static void
        setDataCollection(com.vivocha.sdk.model.datacollection.VivochaDataCollection
        dataCollection)](#VivochaClass-Android-staticvoidsetDataCollection(com.vivocha.sdk.model.datacollection.VivochaDataCollectiondataCollection))
    -   [static void setContactColor(java.lang.String
        color)](#VivochaClass-Android-staticvoidsetContactColor(java.lang.Stringcolor))
    -   [static void setTheme(com.vivocha.sdk.model.VivochaTheme
        theme)](#VivochaClass-Android-staticvoidsetTheme(com.vivocha.sdk.model.VivochaThemetheme))
    -   [static com.vivocha.sdk.model.VivochaTheme
        getTheme()](#VivochaClass-Android-staticcom.vivocha.sdk.model.VivochaThemegetTheme())
    -   [static void
        showSideTab()](#VivochaClass-Android-staticvoidshowSideTab())
    -   [static void
        hideSideTab()](#VivochaClass-Android-staticvoidhideSideTab())
    -   [static com.vivocha.sdk.VivochaContact
        getContact()](#VivochaClass-Android-staticcom.vivocha.sdk.VivochaContactgetContact())
    -   [static void
        createChat(com.vivocha.sdk.model.datacollection.VivochaDataCollection
        dataCollection, Vivocha.VivochaContactCreationCallback
        callback)](#VivochaClass-Android-staticvoidcreateChat(com.vivocha.sdk.model.datacollection.VivochaDataCollectiondataCollection,Vivocha.VivochaContactCreationCallbackcallback))
    -   [static void
        createChat(com.vivocha.sdk.model.datacollection.VivochaDataCollection
        dataCollection)](#VivochaClass-Android-staticvoidcreateChat(com.vivocha.sdk.model.datacollection.VivochaDataCollectiondataCollection))
    -   [static void createContact(VivochaDataCollection dataCollection,
        String type, JSONObject params, final
        VivochaContactCreationCallback
        callback)](#VivochaClass-Android-staticvoidcreateContact(VivochaDataCollectiondataCollection,Stringtype,JSONObjectparams,finalVivochaContactCreationCallbackcallback))
    -   [static void createWeblead(VivochaDataCollection dataCollection,
        String email,  final VivochaContactCreationCallback
        callback)](#VivochaClass-Android-staticvoidcreateWeblead(VivochaDataCollectiondataCollection,Stringemail,finalVivochaContactCreationCallbackcallback))
    -   [static void createCallBackNow(VivochaDataCollection
        dataCollection, String phoneNumber, final
        VivochaContactCreationCallback
        callback)](#VivochaClass-Android-staticvoidcreateCallBackNow(VivochaDataCollectiondataCollection,StringphoneNumber,finalVivochaContactCreationCallbackcallback))
    -   [static void setPushRegistrationID(java.lang.String
        regID)](#VivochaClass-Android-staticvoidsetPushRegistrationID(java.lang.StringregID))
    -   [static void setBlockSideButton(boolean
        block)](#VivochaClass-Android-staticvoidsetBlockSideButton(booleanblock))
    -   [static void addLocalization(VivochaLocalization
        localization)](#VivochaClass-Android-staticvoidaddLocalization(VivochaLocalizationlocalization))
    -   [static void setChatViewHeaderImage(int
        resID)](#VivochaClass-Android-staticvoidsetChatViewHeaderImage(intresID))
    -   [static void setDeveloperMode(boolean
        enable)](#VivochaClass-Android-staticvoidsetDeveloperMode(booleanenable))
    -   [static
        com.vivocha.sdk.model.datacollection.VivochaDataCollection
        getDataCollection()](#VivochaClass-Android-staticcom.vivocha.sdk.model.datacollection.VivochaDataCollectiongetDataCollection())
    -   [static Context
        getContext()](#VivochaClass-Android-staticContextgetContext())
    -   [static void onActivityStart(Activity
        activity)](#VivochaClass-Android-staticvoidonActivityStart(Activityactivity))
    -   [static void onActivityStop(Activity
        activity)](#VivochaClass-Android-staticvoidonActivityStop(Activityactivity))
    -   [static void onActivityPause(Activity
        activity)](#VivochaClass-Android-staticvoidonActivityPause(Activityactivity))
    -   [static void onActivityDestroy(Activity
        activity)](#VivochaClass-Android-staticvoidonActivityDestroy(Activityactivity))
    -   [static void onActivityResume(Activity
        activity)](#VivochaClass-Android-staticvoidonActivityResume(Activityactivity))
    -   [static void onActivityCreate(Activity
        activity)](#VivochaClass-Android-staticvoidonActivityCreate(Activityactivity))
    -   [static String
        getVVCU()](#VivochaClass-Android-staticStringgetVVCU())
    -   [static String
        getVVCT()](#VivochaClass-Android-staticStringgetVVCT())
-   [Instance Methods](#VivochaClass-Android-InstanceMethods)
    -   [void setCallbacks(Vivocha.VivochaCallbacks
        cb)](#VivochaClass-Android-voidsetCallbacks(Vivocha.VivochaCallbackscb))
    -   [void bindCustomAction(java.lang.String customActionCode,
        Vivocha.VivochaCustomActionCallback
        cb)](#VivochaClass-Android-voidbindCustomAction(java.lang.StringcustomActionCode,Vivocha.VivochaCustomActionCallbackcb))
    -   [Vivocha.VivochaCustomActionCallback
        getCustomActionCallback(java.lang.String
        customActionCode)](#VivochaClass-Android-Vivocha.VivochaCustomActionCallbackgetCustomActionCallback(java.lang.StringcustomActionCode))
    -   [boolean
        getDeveloperMode()](#VivochaClass-Android-booleangetDeveloperMode())
    -   [boolean
        isShowingSideTab()](#VivochaClass-Android-booleanisShowingSideTab())
    -   [void overrideLanguage(String
        lang)](#VivochaClass-Android-voidoverrideLanguage(Stringlang))
    -   [void
        disableLocationFeature()](#VivochaClass-Android-voiddisableLocationFeature())
    -   [void
        disableScreenshotFeature()](#VivochaClass-Android-voiddisableScreenshotFeature())
    -   [void
        disableCannedQuestionFeature()](#VivochaClass-Android-voiddisableCannedQuestionFeature())
    -   [void
        disableAudioVideoFeature()](#VivochaClass-Android-voiddisableAudioVideoFeature())
    -   [void
        notifyCustomEngagementButtonShown()](#VivochaClass-Android-voidnotifyCustomEngagementButtonShown())
    -   [void
        notifyCustomEngagementButtonHidden()](#VivochaClass-Android-voidnotifyCustomEngagementButtonHidden())

  

**Class Methods**
-----------------

### **static Vivocha manager()**

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>static Vivocha manager()</span></code></pre></div></td>
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

 

### **static boolean start(Activity activity, java.lang.String acct\_id, java.lang.String serv\_id)**

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
<td><pre class="p2"><code>static boolean start(Activity activity, java.lang.String acct_id, java.lang.String serv_id)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Starts Vivocha using the accountID and ServiceID.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>activity - the main activity of your app.</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>acct_id - Your Vivocha accountID (e.g. vivocha.com/a/YOUR_ACCOUNT_ID/login)</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>serv_id - The serviceID for this application. You will find the ID in the Android foundry inside the Agent Desktop’s settings.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>true if Vivocha started correctly, false otherwise.</code></pre></td>
</tr>
</tbody>
</table>

``` p2
 
```

### static boolean stop()

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
<td><pre class="p2"><code>static boolean stop()</code></pre></td>
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
<td><pre><code>true if Vivocha stops correctly, false otherwise</code></pre></td>
</tr>
</tbody>
</table>

``` p2
 
```

### static void setDataCollection(com.vivocha.sdk.model.datacollection.VivochaDataCollection dataCollection)

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
<td><pre class="p2"><code>static void setDataCollection(com.vivocha.sdk.model.datacollection.VivochaDataCollection dataCollection)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Sets the data collection that will be sent when a new contact is requested.</code></pre></td>
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

### static void setContactColor(java.lang.String color)

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
<td><pre class="p2"><code>static void setContactColor(java.lang.String color)</code></pre></td>
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
<td><pre><code>color - A color string as specified in the VivochaValues.ContactColor# constants. (e.g. VivochaValues.VivochaContactColorOrange)</code></pre></td>
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

### static void setTheme(com.vivocha.sdk.model.VivochaTheme theme)

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
<td><pre class="p2"><code>static void setTheme(com.vivocha.sdk.model.VivochaTheme theme)</code></pre></td>
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
<td><pre><code>theme - your local Vivocha theme.</code></pre></td>
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

### static com.vivocha.sdk.model.VivochaTheme getTheme()

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
<td><pre class="p2"><code>static com.vivocha.sdk.model.VivochaTheme getTheme()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Returns your local theme that was set by the setTheme(theme) method.</code></pre></td>
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
<td><pre><code>Your local Vivocha theme.</code></pre></td>
</tr>
</tbody>
</table>

``` p2
 
```

### static void showSideTab()

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
<td><pre><code>static void showSideTab()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Shows the SideButton in the position defined by the Vivocha Theme.</code></pre></td>
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

### static void hideSideTab()

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
<td><pre class="p2"><code>static void hideSideTab()</code></pre></td>
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

### static com.vivocha.sdk.VivochaContact getContact()

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
<td><pre class="p2"><code>static com.vivocha.sdk.VivochaContact getContact()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>If a contact is in progress, returns the contact object, otherwise returns null.</code></pre></td>
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

 

### static void createChat(com.vivocha.sdk.model.datacollection.VivochaDataCollection dataCollection, Vivocha.VivochaContactCreationCallback callback)

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
<td><pre class="p2"><code>static void createChat(com.vivocha.sdk.model.datacollection.VivochaDataCollection dataCollection, Vivocha.VivochaContactCreationCallback callback)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Creates a new Contact sending the attached dataCollection and fires the callback when it&#39;s done.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>dataCollection - the data collection that will be sent when creating the contact</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>callback - the callback that will be fired when the creation is done or if it fails.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void createChat(com.vivocha.sdk.model.datacollection.VivochaDataCollection dataCollection)

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
<td><pre class="p2"><code>static void createChat(com.vivocha.sdk.model.datacollection.VivochaDataCollection dataCollection, Vivocha.VivochaContactCreationCallback callback)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Creates a new Contact sending the attached dataCollection and shows the chat view.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>dataCollection - the data collection that will be sent when creating the contact</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void createContact(VivochaDataCollection dataCollection, String type, JSONObject params, final VivochaContactCreationCallback callback)

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
<td><pre class="p2"><code>static void createContact(VivochaDataCollection dataCollection, String type, JSONObject params, final VivochaContactCreationCallback callback)</code></pre></td>
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
<td><pre><code>dataCollection - the data collection that will be sent when creating the contact</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>type - the contact type to be created </code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>params - the parameters needed for the given type of contact (e.g. &#39;uri&#39; for &#39;weblead&#39;)</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>callback - the callback that will be fired when the creation is done or if it fails.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void createWeblead(VivochaDataCollection dataCollection, String email,  final VivochaContactCreationCallback callback)

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
<td><pre class="p2"><code>static void createWeblead(VivochaDataCollection dataCollection, String email,  final VivochaContactCreationCallback callback)</code></pre></td>
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
<td><pre><code>dataCollection - the data collection that will be sent when creating the contact</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>email - the email address</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>callback - the callback that will be fired when the creation is done or if it fails.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void createCallBackNow(VivochaDataCollection dataCollection, String phoneNumber, final VivochaContactCreationCallback callback)

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
<td><pre class="p2"><code>static void createCallBackNow(VivochaDataCollection dataCollection, String phoneNumber, final VivochaContactCreationCallback callback)</code></pre></td>
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
<td><pre><code>dataCollection - the data collection that will be sent when creating the contact</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>phoneNumber - the phone number</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>callback - the callback that will be fired when the creation is done or if it fails.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void setPushRegistrationID(java.lang.String regID)

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
<td><pre class="p2"><code>static void setPushRegistrationID(java.lang.String regID)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Enables Vivocha to send push notifications to the current device.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>regID - the registration ID provided by Google when the device registers for the Push Notification service.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void setBlockSideButton(boolean block)

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>static void setBlockSideButton(boolean block)</span></code></pre></div></td>
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
<td><pre><code>block - Set it to true if you want to prevent the appearance of the side button.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void addLocalization(VivochaLocalization localization)

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
<td><pre class="p1"><code>public static void addLocalization(VivochaLocalization localization)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Adds a new translation to the Vivocha UI.</code></pre></td>
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

### static void setChatViewHeaderImage(int resID)

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
<td><pre class="p1"><code>public static void setChatViewHeaderImage(int resID)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>Sets a custom logo to be shown in the Chat Activity in place of the Vivocha one.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>resID - the drawable&#39;s resource ID.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void setDeveloperMode(boolean enable)

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>static void setDeveloperMode(boolean enable)</span></code></pre></div></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Enables the Developer mode then the remote configuration will be the one you set in the Agent Desktop Settings under the Development tab in the Android Service configuration. </code></pre>
<pre class="p2"><code>E.g. you can try new colors or texts without affect the production settings.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>enable - If true enables the Developer mode or disables it otherwise.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### <span style="font-size: 16.0px;line-height: 1.5625;">static com.vivocha.sdk.model.datacollection.VivochaDataCollection getDataCollection()</span>

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
<td><pre><code>static com.vivocha.sdk.model.datacollection.VivochaDataCollection getDataCollection()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Returns the data collection if it was set before, null otherwise.</code></pre></td>
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
<td><pre><code>the data collection object.</code></pre></td>
</tr>
</tbody>
</table>

### static Context getContext()

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
<td><pre><code>static Context getContext()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Utility method to access the Application Context.</code></pre></td>
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
<td><pre><code>the application context.</code></pre></td>
</tr>
</tbody>
</table>

### static void onActivityStart(Activity activity)

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
<td><pre><code>static void onActivityStart(Activity activity)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Activity callback that needs to be called on Android versions lower than ICE_CREAM_SANDWICH (14). 
Call it in the onStart() method of every activity in your app.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>activity - The current activity.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void onActivityStop(Activity activity)

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
<td><pre><code>static void onActivityStop(Activity activity)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Activity callback that needs to be called on Android versions lower than ICE_CREAM_SANDWICH (14). 
Call it in the onStop() method of every activity in your app.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>activity - The current activity.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void onActivityPause(Activity activity)

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
<td><pre><code>static void onActivityPause(Activity activity)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Activity callback that needs to be called on Android versions lower than ICE_CREAM_SANDWICH (14). 
Call it in the onPause() method of every activity in your app.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>activity - The current activity.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void onActivityDestroy(Activity activity)

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
<td><pre><code>static void onActivityDestroy(Activity activity)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Activity callback that needs to be called on Android versions lower than ICE_CREAM_SANDWICH (14). 
Call it in the onDestroy() method of every activity in your app.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>activity - The current activity.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void onActivityResume(Activity activity)

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
<td><pre><code>static void onActivityResume(Activity activity)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Activity callback that needs to be called on Android versions lower than ICE_CREAM_SANDWICH (14). 
Call it in the onResume() method of every activity in your app.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>activity - The current activity.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static void onActivityCreate(Activity activity)

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
<td><pre><code>static void onActivityCreate(Activity activity)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Activity callback that needs to be called on Android versions lower than ICE_CREAM_SANDWICH (14). 
Call it in the onCreate() method of every activity in your app.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>activity - The current activity.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### static String getVVCU()

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
<td><pre><code>static String getVVCU()</code></pre></td>
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
<td><pre><code>the current VVCU.</code></pre></td>
</tr>
</tbody>
</table>

### static String getVVCT()

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
<td><pre><code>static String getVVCT()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Exposes the VVCT for the current visit.</code></pre></td>
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
<td><pre><code>the current VVCT.</code></pre></td>
</tr>
</tbody>
</table>

****Instance Methods****
------------------------

**  
**

### void setCallbacks(Vivocha.VivochaCallbacks cb)

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
<td><pre class="p2"><code>void setCallbacks(Vivocha.VivochaCallbacks cb)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Sets the VivochaCallbacks that you can use to customize your app behavior when there is a new Vivocha event.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>cb - a VivochaCallbacks object.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### void bindCustomAction(java.lang.String customActionCode, Vivocha.VivochaCustomActionCallback cb)

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
<td><pre class="p2"><code>void bindCustomAction(java.lang.String customActionCode, Vivocha.VivochaCustomActionCallback cb)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Binds an action name with an action callback. When a custom action arrives from the agent desktop, the callback will be run.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>customActionCode - the Custom Action code</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>cb - the Callback to execute.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### Vivocha.VivochaCustomActionCallback getCustomActionCallback(java.lang.String customActionCode)

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
<td><pre class="p2"><code>Vivocha.VivochaCustomActionCallback getCustomActionCallback(java.lang.String customActionCode)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Returns the callback binded to a Custom Action code.</code></pre></td>
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
<td><pre><code>the callback if it is defined, null otherwise.</code></pre></td>
</tr>
</tbody>
</table>

### boolean getDeveloperMode()

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
<td><pre class="p2"><code>boolean getDeveloperMode()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Returns the value of the Developer Mode configuration.</code></pre></td>
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
<td><pre><code>true if the Developer Mode is enabled, false otherwise.</code></pre></td>
</tr>
</tbody>
</table>

### boolean isShowingSideTab()

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
<td><pre class="p2"><code>boolean isShowingSideTab()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Returns the visibility of the SideTab.</code></pre></td>
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
<td><pre><code>true if it&#39;s showing the side tab, false otherwise.</code></pre></td>
</tr>
</tbody>
</table>

### void overrideLanguage(String lang)

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
<td><pre class="p2"><code>void overrideLanguage(String lang)</code></pre></td>
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

### void disableLocationFeature()

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
<td><pre class="p2"><code>void disableLocationFeature()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Disables the SDK&#39;s location feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
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

### void disableScreenshotFeature()

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
<td><pre class="p2"><code>void disableScreenshotFeature()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Disables the SDK&#39;s screenshot feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
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

### void disableCannedQuestionFeature()

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
<td><pre class="p2"><code>void disableCannedQuestionFeature()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Disables the SDK&#39;s canned questions feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
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

### void disableAudioVideoFeature()

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
<td><pre class="p2"><code>void disableAudioVideoFeature()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Disables the SDK&#39;s audio/video call feature for the current app and the agent will NOT be able to activate it from the Agent Desktop.</code></pre></td>
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

### void notifyCustomEngagementButtonShown()

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
<td><pre class="p2"><code>void notifyCustomEngagementButtonShown()</code></pre></td>
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

### void notifyCustomEngagementButtonHidden()

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
<td><pre class="p2"><code>void notifyCustomEngagementButtonHidden()</code></pre></td>
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

Document generated by Confluence on Oct 23, 2019 16:12

[Atlassian](http://www.atlassian.com/)
