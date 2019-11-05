1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [iOS](iOS_5079111.html)

<span id="title-text"> Vivocha : iOS SDK Step-by-step Integration (Swift) </span>
=================================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Oct 10, 2019

**This guide will help you integrate the Vivocha SDK inside your native
iOS application written in Swift.**  

The Vivocha iOS SDK gives you a simple and fast way to integrate the
most common Vivocha features inside your native iOS application.

<span class="s1">The SDK automatically handles the communication with
the Vivocha REST APIs  and using the Foundry you will have the
opportunity to customize the widgets' look and feel.</span>

<span class="s1">With a few lines of code you can give direct support to
your customers. </span>

<span class="s1">If there are available agents logged in to your
account, the SDK automatically presents a side button inside your
application that allows your customers to ask for help.</span>

<span class="s1">When the button is tapped, the SDK automatically
requests a contact to your agents then composes and presents a chat view
that is very similar to the most common messaging apps that your
customer is used to using.</span>

<span class="s1">In order to graphically integrate the chat inside your
app you can use many API hooks to customize the elements' colors and
shapes inside the chat view and the side button.</span>

<span class="s1">If you don't want to use the default chat view just
turn off the automatic behaviour, create your view and use the methods
to send the messages and observe the NSNotification objects that the SDK
will send to your code.</span>

Please follow [this
guide](https://vivocha.atlassian.net/wiki/spaces/VVCJ/pages/1048640/iOS+Service+Setup)
to create your iOS service in the Vivocha Foundry. You will find your
accountID and serviceID inside the activation code (written in
Objective-C).

#### Xcode

This guide has been created using Xcode 10.1 and a Swift 3 project.

Let's start:

-   Copy the VivochaSDK inside your project folder (e.g.
    ProjectFolder/third-party/VivochaSDK.framework)
-   Right-click on your App project inside Xcode and select **Add Files
    to "Your app name"**
-   **<span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/783122445.png?height=250" class="confluence-embedded-image" height="250" /></span>**

  

-   Add VivochaSDK.framework
-   <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/782925842.png?height=400" class="confluence-embedded-image" height="400" /></span>

  

-   Right-click again and add the SharedFrameworks folder that it's
    inside the VivochaSDK.framework
    (**VivochaSDK.framework/Versions/A/Resources/SharedFrameworks)**
-   **<span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/782925837.png?width=558" class="confluence-embedded-image" width="558" /></span>**

  

-   Now click on your Application project in order to open the Project
    settings, select your App target and select the **General** tab
-   **<span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/783089683.png?width=558" class="confluence-embedded-image" width="558" /></span>**
-   You will find two sections, **Embedded Binaries** and **Linked
    Frameworks and Libraries.**

  

-   In the **Embedded Binaries** section, click on the + button and
    select Add Other... Navigate to the VivochaSDK.framework folder,
    expand it and choose WebRTC.framework from the Frameworks folder.
-   <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/782827542.png?width=400" class="confluence-embedded-image" width="400" /></span>

  

-   Now press the + button in the **Linked Frameworks and Libraries**
    section. Add **libresolv.tbd **and **libxml2.tbd**
-   <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/783056913.png?width=400" class="confluence-embedded-image" width="400" /></span>

  

-   We are done in the Target part of the settings. Let's now switch to
    the Project settings. Select the **Build Settings** tab.
-   <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/782958607.png?width=558" class="confluence-embedded-image" width="558" /></span>

  

-   Scroll the rows (or filter for *path*) until you find **Framework
    Search Path**, **Header Search Paths**, **Library Search
    Paths. **Change ****PATH\_TO\_VIVOCHA\_SDK ****with the actual
    location of the VivochaSDK.framework.  
    If you are using the VivochaSDK 2.5.3  
    -   Add an entry in the *Framework Search
        Path***: $(SRCROOT)/****PATH\_TO\_VIVOCHA\_SDK****/VivochaSDK.framework/Frameworks**
    -   Add an entry in the *Header Search
        Path***: $(SDKROOT)/usr/include/libxml2**
    -   Add an entry in the *Library Search
        Path***: $(SRCROOT)/**PATH\_TO\_VIVOCHA\_SDK**/VivochaSDK.framework/Versions/A/Resources/SharedFrameworks/XmppFramework/Vendor  
          
        **

<!-- -->

-   If you are using the VivochaSDK 2.6.0, the paths changed a little  
    -   Add an entry in the *Framework Search
        Path***: $(SRCROOT)/****PATH\_TO\_VIVOCHA\_SDK****/VivochaSDK.framework/SharedFrameworks/WebRTC/**
    -   Add an entry in the *Header Search
        Path***: $(SDKROOT)/usr/include/libxml2**
    -   Add an entry in the *Library Search
        Path***: $(SRCROOT)/**PATH\_TO\_VIVOCHA\_SDK**/VivochaSDK.framework/SharedFrameworks/XmppFramework/Vendor  
        **

<!-- -->

-   If you already have an Header Bridging File for Objective-C, just
    add **\#import \<VivochaSDK/VivochaSDK.h\>**, otherwise follow the
    next steps
-   Right-click on your project file and select **New File...**
-   <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/782893072.png?width=400" class="confluence-embedded-image" width="400" /></span>

  

-   Choose **Header File**
-   <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/783089709.png?width=400" class="confluence-embedded-image" width="400" /></span>

  

-   Name it as you prefer, for example YourAppName-Bridging-Header.h
-   <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/782958618.png?width=400" class="confluence-embedded-image" width="400" /></span>

  

-   Add **\#import \<VivochaSDK/VivochaSDK.h\> **in the newly created
    header file.
-   <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/782925853.png?height=250" class="confluence-embedded-image" height="250" /></span>

  

-   Now we need to make the project aware of this new header file, let's
    go back to the Project settings, in the Build Settings tab.
-   Find the Objective-C Bridging Header row and add the relative path
    to your header file. 
-   <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/783056924.png?height=250" class="confluence-embedded-image" height="250" /></span>

  

We are almost there. 

-   Since iOS 10, in order to use the geolocation, file attachment and
    media features, it's mandatory to add the following values to your
    app Info.plist:

    -   **NSCameraUsageDescription**: describes the reason why the app
        accesses the user’s camera

    -   **NSMicrophoneUsageDescription**: describes the reason why the
        app accesses the user's microphone

    -   **NSPhotoLibraryUsageDescription**: describes the reason why the
        app accesses the user's photo library

    -   **NSLocationWhenInUseUsageDescription**: describes the reason
        why the app accesses the user's location info

<!-- -->

-   Since iOS 11, in order to save in the Camera Roll a photo taken
    during the chat, a new value must be added:
    -   **NSPhotoLibraryAddUsageDescription**: describes the reason why
        the app wants to write user's photo library

  

-   <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/783155214.png?width=558" class="confluence-embedded-image" width="558" /></span>

  

-   Add a **New Run Script Phase** in the **Build Phases** tab with the
    following code

    **Sign frameworks**

    ``` syntaxhighlighter-pre
    OLDIFS=$IFS #save default word splitting settings
    IFS=$'\n'

    for f in $(find $CODESIGNING_FOLDER_PATH -name '*.framework') 
    do

    codesign --force --sign "iPhone Developer: XXX (TEAM_ID)" --preserve-metadata=identifier,entitlements --timestamp=none "$f"

    # You can use "${CODE_SIGN_IDENTITY}" as value in --signparameter

    done

    IFS=$OLDIFS #restore default word splitting settings
    ```

    iPhone Developer: XXX (TEAM\_ID) should be changed with your Sign
    Identity

  

-   Now open your AppDelegate source file.
-   In the **func application(\_ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: Any?) -\>
    Bool** method, add **Vivocha<span class="s2">.</span><span
    class="s1">start</span><span class="s2">(withAccountID:
    </span>"YOUR\_ACCOUNT\_ID"<span class="s2">, andServID:
    </span>"YOUR\_SERVICE\_ID"**<span class="s2">**)**  </span><span
    class="s2">and change *YOUR\_ACCOUNT\_ID* and *YOUR\_SERVICE\_ID*
    values with the ones you found in the Vivocha Foundry while you were
    creating the iOS service</span>
-   <span class="s2"><span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/782827522/783089736.png?height=250" class="confluence-embedded-image" height="250" /></span></span>

  

-   Build and Run, you are set!

  

  

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift1.png](attachments/782827522/783122445.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift3.png](attachments/782827522/782925837.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift2.png](attachments/782827522/782925842.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift4.png](attachments/782827522/783089683.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift5.png](attachments/782827522/782827542.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift7.png](attachments/782827522/783056913.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift8.png](attachments/782827522/782958607.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift10.png](attachments/782827522/782893072.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift11.png](attachments/782827522/783089709.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift12.png](attachments/782827522/782958618.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift13.png](attachments/782827522/782925853.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift14.png](attachments/782827522/783056924.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swift15.png](attachments/782827522/783155214.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[swiftcodeend.png](attachments/782827522/783089736.png) (image/png)  

Document generated by Confluence on Oct 23, 2019 16:11

[Atlassian](http://www.atlassian.com/)
