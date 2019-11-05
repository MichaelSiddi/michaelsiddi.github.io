1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [Android](Android_5079113.html)

<span id="title-text"> Vivocha : Android SDK Step-by-step Integration </span>
=============================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Feb 07, 2019

<span class="s1">**Introduction**</span>
========================================

The Vivocha Android SDK gives you a simple and fast way to integrate the
most common Vivocha features inside your native Android application.

<span class="s1">The SDK automatically handles the communication with
the Vivocha REST APIs  and using the Foundry you will have the
opportunity to customize the widgets' look and feel.</span>

<span class="s1">With a few lines of code you can give direct support to
your customers. </span>

<span class="s1">If there are available agents logged in to your account
the SDK automatically presents a side button inside your application
that allows your customers to ask for help.</span>

<span class="s1">When the button is tapped the SDK automatically
requests a contact to your agents then composes and presents a chat view
that is very similar to the most common messaging apps (who said
WhatsApp?) that your customers are used to using.</span>

<span class="s1">In order to graphically integrate the chat inside your
app you can use many API hooks to customize the elements' colors and
shapes inside the chat view and the side button.</span>

<span class="s1">If you don't want to use the default chat view just
turn off the automatic behaviour, create your view and use the methods
to send the messages and the callbacks the SDK provides to you.</span>

**Getting started**
===================

**Vivocha Console**
-------------------

#### <span class="s1">In order to use the Vivocha SDK, you need to configure a Campaign with a Smartphone Channel enabled. You can use the following guide to create it: <a href="https://docs.vivocha.com/docs/vcb-smartphone" class="external-link">https://docs.vivocha.com/docs/vcb-smartphone</a></span>

**Android SDK**
---------------

### **Requirements**

-   The Vivocha Android SDK requires API level 17 (Android 4.2) or
    higher.
-   In order to enable Push Notification, your app needs to be
    registered with Google.

<!-- -->

-   If you want to enable the push notifications, you should add right
    after the Vivocha.start() this method call

    ``` p1
    VivochaNotificationManager.manager().register("YOUR_GOOGLE_PROJECT_NUMBER", new VivochaNotificationManagerCallbacks() {
    ```

    ``` p1
    @Override
    ```

    ``` p1
    public void onSuccess(String arg0) {
    ```

    ``` p2
         Log.d("The registration ID is: " + arg0);
    ```

             //This is the right place to notify your server for the registration ID, if you need to.

    ``` p2
    }
    ```

    ``` p3
    @Override
    ```

    ``` p3
    public void onFailure() {
    ```

    ``` p3
        Log.d("Something went wrong");
    ```

    ``` p3
    }
    ```

    ``` p1
    }, showMissingGooglePlayServicesPopup); //if this parameter is true, when a user runs your app from an Android device without the Google Play Services he/she will be asked to install them.
    ```

      

-   If you already have a mechanism to fetch the registration ID for the
    push notifications, just notify Vivocha using 

        Vivocha.manager().setPushRegistrationID(regID);

  

Important notice about the video feature

<span
class="aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon"></span>

If you wish to use the video feature you'll need to do add a 0px x 0px
SurfaceView inside your main activity layout. This is needed to avoid a
graphic glitch (the screen blinks black) when adding an OpenGL view on
the activity window.  
  
The tag you need to add in your MainActivity layout is  
  

``` p1
<SurfaceView android:id="@+id/vivocha_floating_video_fake_surfaceview"
```

``` p1
             android:layout_width="0px" 
```

``` p1
             android:layout_height="0px" 
```

``` p2
             android:background="@android:color/transparent"/>
```

``` p2
```

``` p2
It's safe and it shows/changes nothing on your activity appearance.
```

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>If you add </p>
<pre><code>Vivocha.setDeveloperMode(true); </code></pre>
<p>before the Vivocha.start() call the SDK will fetch the Development configuration you can setup in the Android foundry then you will be able to test a new configuration before release it in the Production environment.</p></td>
</tr>
</tbody>
</table>

**  
**

### <span style="line-height: 1.5;">Eclipse IDE</span>

-   Open the workspace where you have your app's project.
-   In the Package Explorer right click on an empty space and in the
    contextual menu choose **Import.**  
    **<span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/1343810.png?width=200" class="confluence-embedded-image confluence-thumbnail" width="200" /></span>**

-   Select ***Android \> Existing Android Code Into Workspace*** and
    press **Next**  
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/1343690.png?width=500" class="confluence-embedded-image" width="500" /></span>

-   Browse your file system and select the VivochaSDK library folder  
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/1343691.png?width=500" class="confluence-embedded-image" width="500" /></span>
-   Eclipse should find a project to import inside that folder; make
    sure you've selected it and press **Finish**.
-   Now we need to "link" the Vivocha SDK with the Android app.
-   Right-click on your app project and select **Properties**
-   Go to the Android section and in the bottom you should see the
    Library zone
-   Press Add...
-   In the Project Selection popup you should see the VivochaSDK library
    project you added before, select it and press OK  
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/1343686.png?width=500" class="confluence-embedded-image" width="500" /></span>
-   The library should now be listed in the Library section with a green
    checkmark on its left.  
    <span
    class="confluence-embedded-file-wrapper"><img src="assets/images/1048603/1343687.png" class="confluence-embedded-image" /></span>
-   Press OK to close the window.
-   You should now have tons of errors in your console - that's ok! Now
    we have to import the required libraries.
-   The libraries required for Vivocha to work properly are:
    -   Volley - an HTTP connection library made by Google
    -   Google Play Services - needed for the Push Notifications and the
        Location Services.
    -   Smack - This is the XMPP library used for the communication
        stream. (The jar is already built-in the VivochaSDK library
        project)
    -   Google Support Library v4  
        You will find the required libraries inside the Third-Party
        folder inside the VivochaSDK zip.  
          
-   We will now integrate Volley and we'll link it to the Vivocha SDK. 
-   In the Package Explorer right click again in an empty space and
    choose Import
-   Browse your file system inside the Third-Party folder and select the
    volley folder
-   Select only the Volley Project and press Finish  
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/1343692.png?width=500" class="confluence-embedded-image" width="500" /></span>
-   Now you have to repeat the steps to link Volley to your app
    project  
    <span
    class="confluence-embedded-file-wrapper"><img src="assets/images/1048603/1343688.png" class="confluence-embedded-image" /></span>
-   Repeat the steps for the Google Play Services project. You will find
    it under
    YOUR\_ANDROID\_SDK\_FOLDER/sdk/extras/google/google\_play\_services
-   Import only the **google-play-services\_lib **- the other projects
    are just demos and we don't need them.  
    <span
    class="confluence-embedded-file-wrapper"><img src="assets/images/1048603/1343689.png" class="confluence-embedded-image confluence-content-image-border" /></span>  
      

<!-- -->

-   After your complete all the steps above you are ready to write some
    code! Yay!!
-   Open your app manifest. You ne<span
    style="line-height: 1.4285715;color: rgb(0,0,0);">ed to add some
    lines:</span>

    -   **Android Permissions - Inside the \<manifest\> tag: **

        Needed by Vivocha to work properly  
        \<uses-permission android:name="android.permission.INTERNET"
        /\>  
        \<uses-permission
        android:name="android.permission.SYSTEM\_ALERT\_WINDOW" /\>  
        \<uses-permission android:name="android.permission.GET\_TASKS"
        /\>  
        \<uses-permission
        android:name="android.permission.ACCESS\_FINE\_LOCATION" /\>  
          
        Needed for the Audio/Video feature  
        \<uses-feature android:glEsVersion="0x00020000"
        android:required="true" /\>  
        \<uses-permission android:name="android.permission.CAMERA" /\>  
        \<uses-permission
        android:name="android.permission.MODIFY\_AUDIO\_SETTINGS" /\>  
        \<uses-permission
        android:name="android.permission.RECORD\_AUDIO" /\>

        \<uses-permission
        android:name="android.permission.ACCESS\_NETWORK\_STATE" /\>

        \<uses-permission
        android:name="android.permission.WRITE\_EXTERNAL\_STORAGE"/\>

        Needed for the Push Notifications  
        \<uses-permission
        android:name="com.google.android.c2dm.permission.RECEIVE" /\>  
        \<uses-permission
        android:name="com.google.android.c2dm.intent.RECEIVE"/\>

        **  
        **

    -   **Inside the \<application\> tag: **

        Needed by Vivocha to work properly  
        \<activity
        android:name="com.vivocha.sdk.internal.VivochaChatActivity"
        android:theme="@style/VivochaChatTheme" /\>

        <span
        class="s1"> </span>\<activity android:name="com.vivocha.sdk.internal.permissions.VivochaPermissionActivity"
         <span class="s3"
        style="line-height: 1.42857;">android:theme</span><span
        class="s1"
        style="line-height: 1.42857;">=</span>"@style/VivochaTransparentActivityTheme" /\> 

        Needed for the Push Notifications and Vivocha  
        \<receiver
        android:name="com.vivocha.sdk.push.VivochaNotificationBroadcastReceiver"
        android:permission="com.google.android.c2dm.permission.SEND" \>  
          
            \<intent-filter\>  
                \<action
        android:name="com.google.android.c2dm.intent.RECEIVE" /\>  
                \<category android:name="com.vivocha.sdk.push" /\>  
            \</intent-filter\>  
        \</receiver\>  
          
        \<service android:name="com.vivocha.sdk.push.VivochaPushService"
        /\>

        Needed for the Google Play Services  
        \<meta-data android:name="com.google.android.gms.version"
        android:value="@integer/google\_play\_services\_version" /\>

        **  
        **

<!-- -->

-   Ok, we are done with the manifest file. Now go to the main Activity
    class of your application.
-   Import **com.vivocha.sdk.Vivocha**
-   In the ***onStart()*** method, after the *super.onStart()* call 

        Vivocha.start(this, "YOUR_ACCOUNT_ID", "YOUR_ANDROID_SERVICE_ID");

      

-   <span class="s1">Build and Run your app and it should work
    fine. </span>  
    <span class="s1">If there is an agent logged in to your account, the
    Live Help label will appear on the left side of your device.</span>

<span
style="font-size: 16.0px;font-weight: bold;line-height: 1.5;">Android
Studio IDE</span>

-   Open your app's project.
-   Choose **Import Module** from the **File--\>New** menu  
      
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/17006596.png?height=250" class="confluence-embedded-image" height="250" /></span>  
      
-   Browse your file system and select the Vivocha SDK library folder  
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/17006598.png?width=800" class="confluence-embedded-image" width="800" /></span>  

<!-- -->

-   If any dependencies are required, they will also be downloaded and
    installed  
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/17006599.png?width=800" class="confluence-embedded-image" width="800" /></span>
-   Finally the Vivocha SDK module will be available inside your
    project  
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/17006600.png?width=780" class="confluence-embedded-image" width="780" /></span>  
      
-   Now we need to "link" the Vivocha SDK with the Android app.
-   Right-click on your app project and select **Open Module Settings  
    **<span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/17006601.png?width=800" class="confluence-embedded-image" width="800" /></span>**  
    **
-   Go to tab **Dependencies** and click on the **+** button**  
    **<span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/17006602.png?width=780" class="confluence-embedded-image" width="780" /></span>  
      
-   And select the **vivocha\_sdk** module  
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/17006603.png?width=600" class="confluence-embedded-image" width="600" /></span>  
      
-   Once the module was successfully add to your app, o<span
    style="line-height: 1.42857;">pen your app **manifest** and add the
    following</span><span style="color: rgb(0,0,0);"> lines:</span>  
    <span style="color: rgb(0,0,0);"><span
    style="line-height: 17.1428px;">  
    </span></span>
    -   **Android Permissions - Inside the \<manifest\> tag: **

        Needed by Vivocha to work properly  
        \<uses-permission android:name="android.permission.INTERNET"
        /\>  
        \<uses-permission
        android:name="android.permission.SYSTEM\_ALERT\_WINDOW" /\>  
        \<uses-permission android:name="android.permission.GET\_TASKS"
        /\>  
        \<uses-permission
        android:name="android.permission.ACCESS\_FINE\_LOCATION" /\>  
          
        Needed for the Audio/Video feature  
        \<uses-feature android:glEsVersion="0x00020000"
        android:required="true" /\>  
        \<uses-permission android:name="android.permission.CAMERA" /\>  
        \<uses-permission
        android:name="android.permission.MODIFY\_AUDIO\_SETTINGS" /\>  
        \<uses-permission
        android:name="android.permission.RECORD\_AUDIO" /\>  
        \<uses-permission
        android:name="android.permission.WRITE\_EXTERNAL\_STORAGE"/\>

        Needed for the Push Notifications  
        \<uses-permission
        android:name="com.google.android.c2dm.permission.RECEIVE" /\>  
        \<uses-permission
        android:name="com.google.android.c2dm.intent.RECEIVE"/\>

        **  
        **

    -   **Inside the \<application\> tag: **

        Needed by Vivocha to work properly  
        \<activity
        android:name="com.vivocha.sdk.internal.VivochaChatActivity"
        android:theme="@style/VivochaChatTheme" /\>

        <span
        class="s1"> </span>\<activity android:name="com.vivocha.sdk.internal.permissions.VivochaPermissionActivity"
         <span class="s3">android:theme</span><span
        class="s1">=</span>"@style/VivochaTransparentActivityTheme" /\> 

        Needed for the Push Notifications and Vivocha  
        \<receiver
        android:name="com.vivocha.sdk.push.VivochaNotificationBroadcastReceiver"
        android:permission="com.google.android.c2dm.permission.SEND" \>  
          
            \<intent-filter\>  
                \<action
        android:name="com.google.android.c2dm.intent.RECEIVE" /\>  
                \<category android:name="com.vivocha.sdk.push" /\>  
            \</intent-filter\>  
        \</receiver\>  
          
        \<service android:name="com.vivocha.sdk.push.VivochaPushService"
        /\>

-   Now go to the main Activity class of your application, import
    **com.vivocha.sdk.Vivocha** and add the call to
    the **Vivocha.start** function by specifying your account id and
    your service id  
      
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048603/17006604.png?width=800" class="confluence-embedded-image" width="800" /></span>  
      
-   <span class="s1">Build and Run your app and it should work
    fine. </span>  
    <span class="s1">If there is an agent logged in to your account, the
    Live Help label will appear on the left side of your device.</span>

<span class="s1">  
</span>

<span class="s1">  
</span>

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-09 at 16.32.16.png](attachments/1048603/1343764.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_btn.png](attachments/1048603/1343765.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_foundry.png](attachments/1048603/1343767.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_activation\_code.png](attachments/1048603/1343766.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-11 at 16.50.03.png](attachments/1048603/1343810.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-11 at 16.50.58.png](attachments/1048603/1343690.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-11 at 16.52.54.png](attachments/1048603/1343691.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-14 at 16.40.09.png](attachments/1048603/1343692.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-14 at 16.40.31.png](attachments/1048603/1343693.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-14 at 16.43.55.png](attachments/1048603/1343686.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-14 at 17.04.10.png](attachments/1048603/1343687.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-14 at 17.07.20.png](attachments/1048603/1343688.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-14 at 17.41.41.png](attachments/1048603/1343689.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[settings.png](attachments/1048603/9273444.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[service\_tab.png](attachments/1048603/9273445.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_service\_button.png](attachments/1048603/9273446.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_studio\_01.png](attachments/1048603/17006597.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_studio\_01.png](attachments/1048603/17006596.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_studio\_02.png](attachments/1048603/17006598.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_studio\_03.png](attachments/1048603/17006599.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_studio\_04.png](attachments/1048603/17006600.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_studio\_05.png](attachments/1048603/17006601.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_studio\_06.png](attachments/1048603/17006602.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_studio\_07.png](attachments/1048603/17006603.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_studio\_08.png](attachments/1048603/17006604.png)
(image/png)  

Document generated by Confluence on Oct 23, 2019 16:11

[Atlassian](http://www.atlassian.com/)
