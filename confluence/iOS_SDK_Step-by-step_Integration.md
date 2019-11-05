# iOS SDK Step-by-step Integration

# Introduction

The Vivocha iOS SDK gives you a simple and fast way to integrate the
most common Vivocha features inside your native iOS application.

The SDK automatically handles the communication with the Vivocha REST
APIs  and using the Foundry you will have the opportunity to customize
the widgets' look and feel.

With a few lines of code you can give direct support to your customers. 

If there are available agents logged in to your account the SDK
automatically presents a side button inside your application that allows
your customers to ask for help.

When the button is tapped the SDK automatically requests a contact to
your agents then composes and presents a chat view that is very similar
to the most common messaging apps (who said WhatsApp?) that your
customer is used to using.

In order to graphically integrate the chat inside your app you can use
many API hooks to customize the elements' colors and shapes inside the
chat view and the side button.

If you don't want to use the default chat view just turn off the
automatic behaviour, create your view and use the methods to send the
messages and observe the NSNotification objects that the SDK will send
to your code.

# Getting started

**Agent Desktop**

#### In order to use the Vivocha SDK, you need to configure a Campaign with a Smartphone Channel enabled. You can use the following guide to create it: https://docs.vivocha.com/docs/vcb-smartphone

#### XCode

In order to enable Vivocha in your application you need to create a
service, to do that please follow the previous section ‘Agent Desktop’
before proceeding. If you have already created an iOS Service in the
Agent Desktop you can continue on to the next step.

-   Make sure that your app is targeting at least iOS 9.0
-   Your app needs to be registered with Apple for Push Notifications.

Let’s start:

1.  Copy the VivochaSDK inside your project folder (e.g.
    ProjectFolder/third-party/VivochaSDK.framework)
2.  VivochaSDK Framework needs two iOS dynamic libraries in order to
    work correctly: 
    1.  libxml2.dylib
    2.  libresolv.dylib
        -   To add these libraries select the project file inside
            XCode  
            ![](attachments/1048824/1344240.png)
        -   Then select the application target on the left  
            ![](attachments/1048824/1344243.png?width=500){width="500"}
        -   Now choose the General tab  
            ![](attachments/1048824/1344242.png)
        -   Scroll down until you find the Linked Frameworks and
            Libraries section  
            ![](attachments/1048824/1344229.png)
        -   Now press the + button, type libresolv in the search field
            then choose libresolv.dylib and press Add  
            ![](attachments/1048824/1344333.png)
        -   Now press the + button again and type libxml2 in the search
            field, choose libxml2.dylib and press Add  
            ![](attachments/1048824/1344228.png)
        -   Press the + button once more and type libc++, choose
            libc++.dylib and press Add  
            **  
            **
        -   Now you should have a list like this:  
            ![](attachments/1048824/9273430.png?height=250){height="250"}
        -   Press the + button one more time and then press Add Other…  
            ![](attachments/1048824/1344230.png)
        -   Explore your project folder in your file system and pick the
            VivochaSDK.framework file  
            ![](attachments/1048824/1344233.png?width=500){width="500"}
        -   Explore the project folder in your file system again, expand
            the VivochaSDK.framework and pick the SharedFrameworks
            folder under Resources  
            ![](attachments/1048824/1344263.png?width=400){width="400"}  
            -   The VivochaSDK ships the frameworks it needs in a
                separate folder in order to enable you to remove the
                ones that are in conflict with the frameworks necessary
                for your application.  
        -   Ok… this is the last step: Switch to the Build Settings tab
            and scroll down (or search for it using the search bar) to
            Header Search Paths, double click on the value, press the +
            button then in the new row add
            $(SDKROOT)/usr/include/libxml2  
            ![](attachments/1048824/1344262.png?width=500){width="500"}
        -   Now you are ready to code! Yay!
3.  Open your Application Delegate file (it should be named
    AppDelegate.m or something similar)
    1.  Put \#import   after the AppDelegate.h import (1)
    2.  In your service configuration you will find the activation code
        that you can copy and paste after your custom initialization.
        The method is *\[Vivocha
        startWithAccountID:@“****YOUR\_ACCOUNT\_ID****”
        andServID:@“****YOUR\_SERVICE\_ID****”\];* (2)  
        ![](attachments/1048824/1344272.png)

    -   -   You can choose to start Vivocha manually (using the
            *startAutomatic:withAccountID:andServID*: method) but in
            that case you will need to add **\[Vivocha
            setPushTokenWithData:YOUR\_DEV\_TOKEN\]** inside your
            application delegate’s method
            *application:didRegisterForRemoteNotificationsWithDeviceToken*:.

4.  Build and Run your app and it should work fine. If there is an agent
    logged in to your account the side tab button should appear in the
    left side of your app.
5.  Now the VivochaSDK will automatically listen for Vivocha-related
    Push Notifications and will handle them without changing your
    application code.

## Attachments:

![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 11.33.44.png](attachments/1048824/1344090.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 11.33.44.png](attachments/1048824/1344089.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 12.25.38.png](attachments/1048824/1344087.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 12.25.57.png](attachments/1048824/1344088.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_service\_with\_push\_data.png](attachments/1048824/1344289.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [activation
code.png](attachments/1048824/1344278.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[appearance0.png](attachments/1048824/1344276.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_start\_vivocha.png](attachments/1048824/1344279.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[service\_tab.png](attachments/1048824/1344277.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_service\_button.png](attachments/1048824/1344282.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[ios\_button.png](attachments/1048824/1344283.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[appearance1.png](attachments/1048824/1344280.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[settings.png](attachments/1048824/1344281.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [activation
code.png](attachments/1048824/1344274.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_service\_with\_push\_data.png](attachments/1048824/1344275.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[service\_tab.png](attachments/1048824/1344270.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[appearance0.png](attachments/1048824/1344354.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_start\_vivocha.png](attachments/1048824/1344234.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_service\_button.png](attachments/1048824/1344269.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[appearance1.png](attachments/1048824/1344350.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[ios\_button.png](attachments/1048824/1344268.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[settings.png](attachments/1048824/1344271.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[settings.png](attachments/1048824/1344351.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[service\_tab.png](attachments/1048824/1344355.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_service\_button.png](attachments/1048824/1344352.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[ios\_button.png](attachments/1048824/1344353.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_service\_with\_push\_data.png](attachments/1048824/1344232.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [activation
code.png](attachments/1048824/1344235.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [new\_start
with.png](attachments/1048824/1344332.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 19.38.26.png](attachments/1048824/1344342.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 19.40.16.png](attachments/1048824/1344343.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[1select\_project\_name.png](attachments/1048824/1344340.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[2select\_target.png](attachments/1048824/1344341.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[3choose\_general.png](attachments/1048824/1344339.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[4empty\_library\_frameworks.png](attachments/1048824/1344338.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[5pick\_libxml2.png](attachments/1048824/1344337.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[6library\_frameworks\_with\_libresolv\_libxml2.png](attachments/1048824/1344336.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[7pick\_vivocha\_add\_other.png](attachments/1048824/1344335.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[8pick\_vivocha\_file.png](attachments/1048824/1344334.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [activation
code.png](attachments/1048824/1344345.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_service\_with\_push\_data.png](attachments/1048824/1344344.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_start\_vivocha.png](attachments/1048824/1344286.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[service\_tab.png](attachments/1048824/1344349.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_service\_button.png](attachments/1048824/1344346.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[appearance0.png](attachments/1048824/1344287.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[appearance1.png](attachments/1048824/1344291.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[ios\_button.png](attachments/1048824/1344347.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[settings.png](attachments/1048824/1344348.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[settings.png](attachments/1048824/1344288.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[service\_tab.png](attachments/1048824/1344284.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_service\_button.png](attachments/1048824/1344285.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[ios\_button.png](attachments/1048824/1344290.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[new\_service\_with\_push\_data.png](attachments/1048824/1344085.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [activation
code.png](attachments/1048824/1344086.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 19.38.26.png](attachments/1048824/1344263.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 19.40.16.png](attachments/1048824/1344262.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[1select\_project\_name.png](attachments/1048824/1344240.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[2select\_target.png](attachments/1048824/1344243.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[3choose\_general.png](attachments/1048824/1344242.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[4empty\_library\_frameworks.png](attachments/1048824/1344229.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[5pick\_libxml2.png](attachments/1048824/1344228.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[6library\_frameworks\_with\_libresolv\_libxml2.png](attachments/1048824/1344231.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[7pick\_vivocha\_add\_other.png](attachments/1048824/1344230.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[8pick\_vivocha\_file.png](attachments/1048824/1344233.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[resolv.png](attachments/1048824/1344333.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [new\_start
with.png](attachments/1048824/1344272.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2015-06-17 at 17.56.51.png](attachments/1048824/9273431.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2015-06-17 at 17.57.03.png](attachments/1048824/9273432.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2015-06-17 at 17.56.51.png](attachments/1048824/9273429.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2015-06-17 at 17.57.03.png](attachments/1048824/9273430.png)
(image/png)  
