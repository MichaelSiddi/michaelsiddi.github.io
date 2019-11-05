1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [iOS](iOS_5079111.html)

<span id="title-text"> Vivocha : iOS SDK Step-by-step Integration </span>
=========================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Feb 07, 2019

<span class="s1">**Introduction**</span>
========================================

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">The
Vivocha iOS SDK gives you a simple and fast way to integrate the most
common Vivocha features inside your native iOS application.</span>

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
WhatsApp?) that your customer is used to using.</span>

<span class="s1">In order to graphically integrate the chat inside your
app you can use many API hooks to customize the elements' colors and
shapes inside the chat view and the side button.</span>

<span class="s1">If you don't want to use the default chat view just
turn off the automatic behaviour, create your view and use the methods
to send the messages and observe the NSNotification objects that the SDK
will send to your code.</span>

<span class="s1">**Getting started**</span>
===========================================

**Agent Desktop**

#### <span class="s1">In order to use the Vivocha SDK, you need to configure a Campaign with a Smartphone Channel enabled. You can use the following guide to create it: <a href="https://docs.vivocha.com/docs/vcb-smartphone" class="external-link">https://docs.vivocha.com/docs/vcb-smartphone</a></span>

#### <span class="s1">**XCode**</span>

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">In
order to enable Vivocha in your application you need to create a
service, to do that please follow the previous section ‘Agent Desktop’
before proceeding. If you have already created an iOS Service in the
Agent Desktop you can continue on to the next step.</span>

-   <span
    style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Make
    sure that your app is targeting at least iOS 9.0</span>
-   <span class="s1">Your app needs to be registered with Apple for Push
    Notifications.</span>

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Let’s
start:</span>

1.  <span
    style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Copy
    the VivochaSDK inside your project folder (e.g.
    ProjectFolder/third-party/VivochaSDK.framework)</span>
2.  <span class="s1">VivochaSDK Framework needs two iOS dynamic
    libraries in order to work correctly: </span>
    1.  <span class="s1">libxml2.dylib</span>
    2.  <span class="s1">libresolv.dylib</span>
        -   <span class="s1">To add these libraries select the project
            file inside XCode</span>  
            <span
            class="confluence-embedded-file-wrapper"><img src="assets/images/1048824/1344240.png" class="confluence-embedded-image" /></span>
        -   <span class="s1">Then select the application target on the
            left</span>  
            <span
            class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048824/1344243.png?width=500" class="confluence-embedded-image" width="500" /></span>
        -   <span class="s1">Now choose the General tab</span>  
            <span
            class="confluence-embedded-file-wrapper"><img src="assets/images/1048824/1344242.png" class="confluence-embedded-image" /></span>
        -   <span class="s1">Scroll down until you find the Linked
            Frameworks and Libraries section</span>  
            <span
            class="confluence-embedded-file-wrapper"><img src="assets/images/1048824/1344229.png" class="confluence-embedded-image" /></span>
        -   <span class="s1">Now press the **+** button, type
            *libresolv* in the search field then choose
            **libresolv.dylib** and press **Add**</span>  
            <span
            class="confluence-embedded-file-wrapper"><img src="assets/images/1048824/1344333.png" class="confluence-embedded-image" /></span>
        -   <span class="s1">Now press the **+** button again and type
            *libxml2* in the search field, choose **libxml2.dylib** and
            press **Add**</span>  
            <span
            class="confluence-embedded-file-wrapper"><img src="assets/images/1048824/1344228.png" class="confluence-embedded-image" /></span>
        -   <span class="s1">Press the + button once more and
            type *libc++, *choose **libc++.dylib** and
            press **Add**</span>  
            <span class="s1">**<span
            class="confluence-embedded-file-wrapper"><img src="assets/images/1048824/9273429.png" class="confluence-embedded-image" /></span>  
            **</span>
        -   <span class="s1">Now you should have a list like
            this:</span>  
            <span
            class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048824/9273430.png?height=250" class="confluence-embedded-image" height="250" /></span>
        -   <span class="s1">Press the **+** button one more time and
            then press **Add Other…**</span>  
            <span
            class="confluence-embedded-file-wrapper"><img src="assets/images/1048824/1344230.png" class="confluence-embedded-image" /></span>
        -   <span class="s1">Explore your project folder in your file
            system and pick the VivochaSDK.framework file</span>  
            <span
            class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048824/1344233.png?width=500" class="confluence-embedded-image" width="500" /></span>
        -   <span class="s1">Explore the project folder in your file
            system again, expand the VivochaSDK.framework and pick the
            **SharedFrameworks** folder under *Resources*</span>  
            <span
            class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048824/1344263.png?width=400" class="confluence-embedded-image" width="400" /></span>  
            -   <span class="s1">The VivochaSDK ships the frameworks it
                needs in a separate folder in order to enable you to
                remove the ones that are in conflict with the frameworks
                necessary for your application.  </span>
        -   <span class="s1">Ok… this is the last step: Switch to the
            **Build Settings** tab and scroll down (or search for it
            using the search bar) to **Header Search Paths**, double
            click on the value, press the **+** button then in the new
            row add **$(SDKROOT)/usr/include/libxml2**</span>  
            <span
            class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048824/1344262.png?width=500" class="confluence-embedded-image" width="500" /></span>
        -   <span class="s1">Now you are ready to code! Yay!</span>
3.  <span
    style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Open
    your Application Delegate file (it should be named AppDelegate.m or
    something similar)</span>
    1.  <span
        style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Put
        **\#import \<VivochaSDK/VivochaSDK.h\> ** after the
        AppDelegate.h import (1)</span>
    2.  <span
        style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">In
        your service configuration you will find the activation code
        that you can copy and paste after your custom initialization.
        The method is </span>*\[Vivocha
        startWithAccountID:@“****YOUR\_ACCOUNT\_ID****”
        andServID:@“****YOUR\_SERVICE\_ID****”\];* <span
        style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">(2)</span>  
        <span
        class="confluence-embedded-file-wrapper"><img src="assets/images/1048824/1344272.png" class="confluence-embedded-image" /></span>

    -   -   <span
            style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">You
            can choose to start Vivocha manually (using the
            </span>*startAutomatic:withAccountID:andServID*<span
            style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">:
            method) but in that case you will need to add
            </span>**\[Vivocha setPushTokenWithData:YOUR\_DEV\_TOKEN\]**
            <span
            style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">inside
            your application delegate’s method
            </span>*application:didRegisterForRemoteNotificationsWithDeviceToken*<span
            style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">:.</span>

4.  <span class="s1">Build and Run your app and it should work fine. If
    there is an agent logged in to your account the side tab button
    should appear in the left side of your app.</span>
5.  <span
    style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Now
    the VivochaSDK will automatically listen for Vivocha-related Push
    Notifications and will handle them without changing your application
    code.</span><span
    style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">  
    </span>

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 11.33.44.png](attachments/1048824/1344090.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 11.33.44.png](attachments/1048824/1344089.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 12.25.38.png](attachments/1048824/1344087.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 12.25.57.png](attachments/1048824/1344088.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_service\_with\_push\_data.png](attachments/1048824/1344289.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[activation code.png](attachments/1048824/1344278.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[appearance0.png](attachments/1048824/1344276.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_start\_vivocha.png](attachments/1048824/1344279.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[service\_tab.png](attachments/1048824/1344277.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_service\_button.png](attachments/1048824/1344282.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[ios\_button.png](attachments/1048824/1344283.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[appearance1.png](attachments/1048824/1344280.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[settings.png](attachments/1048824/1344281.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[activation code.png](attachments/1048824/1344274.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_service\_with\_push\_data.png](attachments/1048824/1344275.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[service\_tab.png](attachments/1048824/1344270.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[appearance0.png](attachments/1048824/1344354.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_start\_vivocha.png](attachments/1048824/1344234.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_service\_button.png](attachments/1048824/1344269.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[appearance1.png](attachments/1048824/1344350.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[ios\_button.png](attachments/1048824/1344268.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[settings.png](attachments/1048824/1344271.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[settings.png](attachments/1048824/1344351.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[service\_tab.png](attachments/1048824/1344355.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_service\_button.png](attachments/1048824/1344352.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[ios\_button.png](attachments/1048824/1344353.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_service\_with\_push\_data.png](attachments/1048824/1344232.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[activation code.png](attachments/1048824/1344235.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_start with.png](attachments/1048824/1344332.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 19.38.26.png](attachments/1048824/1344342.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 19.40.16.png](attachments/1048824/1344343.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[1select\_project\_name.png](attachments/1048824/1344340.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[2select\_target.png](attachments/1048824/1344341.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[3choose\_general.png](attachments/1048824/1344339.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[4empty\_library\_frameworks.png](attachments/1048824/1344338.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[5pick\_libxml2.png](attachments/1048824/1344337.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[6library\_frameworks\_with\_libresolv\_libxml2.png](attachments/1048824/1344336.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[7pick\_vivocha\_add\_other.png](attachments/1048824/1344335.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[8pick\_vivocha\_file.png](attachments/1048824/1344334.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[activation code.png](attachments/1048824/1344345.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_service\_with\_push\_data.png](attachments/1048824/1344344.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_start\_vivocha.png](attachments/1048824/1344286.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[service\_tab.png](attachments/1048824/1344349.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_service\_button.png](attachments/1048824/1344346.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[appearance0.png](attachments/1048824/1344287.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[appearance1.png](attachments/1048824/1344291.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[ios\_button.png](attachments/1048824/1344347.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[settings.png](attachments/1048824/1344348.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[settings.png](attachments/1048824/1344288.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[service\_tab.png](attachments/1048824/1344284.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_service\_button.png](attachments/1048824/1344285.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[ios\_button.png](attachments/1048824/1344290.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_service\_with\_push\_data.png](attachments/1048824/1344085.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[activation code.png](attachments/1048824/1344086.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 19.38.26.png](attachments/1048824/1344263.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 19.40.16.png](attachments/1048824/1344262.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[1select\_project\_name.png](attachments/1048824/1344240.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[2select\_target.png](attachments/1048824/1344243.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[3choose\_general.png](attachments/1048824/1344242.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[4empty\_library\_frameworks.png](attachments/1048824/1344229.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[5pick\_libxml2.png](attachments/1048824/1344228.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[6library\_frameworks\_with\_libresolv\_libxml2.png](attachments/1048824/1344231.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[7pick\_vivocha\_add\_other.png](attachments/1048824/1344230.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[8pick\_vivocha\_file.png](attachments/1048824/1344233.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[resolv.png](attachments/1048824/1344333.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[new\_start with.png](attachments/1048824/1344272.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-06-17 at 17.56.51.png](attachments/1048824/9273431.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-06-17 at 17.57.03.png](attachments/1048824/9273432.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-06-17 at 17.56.51.png](attachments/1048824/9273429.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-06-17 at 17.57.03.png](attachments/1048824/9273430.png)
(image/png)  

Document generated by Confluence on Oct 23, 2019 16:10

[Atlassian](http://www.atlassian.com/)
