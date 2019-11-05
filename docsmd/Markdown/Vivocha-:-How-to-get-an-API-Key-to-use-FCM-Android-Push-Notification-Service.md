1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [Android](Android_5079113.html)
4.  [Android How To Collection](5079103.html)

<span id="title-text"> Vivocha : How to get an API Key to use FCM (Android Push Notification Service) </span>
=============================================================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Feb 04, 2019

How to get an API Key to use Firebase Cloud Messaging (Android Push Notification Service)
-----------------------------------------------------------------------------------------

<span class="s1">  
</span>In order to enable your Vivocha powered application to receive
push notifications from the agents you needs to configure your Android
Service with the FCM Api Key.

  

Log in to the Firebase Console
(<a href="https://console.firebase.google.com" class="external-link">https://console.firebase.google.com</a>)

### Creating a project

1.  Press the Create Project button  
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048639/956104705.png?height=400" class="confluence-embedded-image" height="400" /></span>
2.  Compile the form with your project name  
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048639/955908098.png?height=400" class="confluence-embedded-image" height="400" /></span>
3.  Wait until the project has been created
4.  Press the Android icon to add an Android App to your new project  
    <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048639/955940868.png?height=250" class="confluence-embedded-image" height="250" /></span>
5.  Compile the Android Package Name with the one used by your app
6.  <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048639/956334084.png?height=250" class="confluence-embedded-image" height="250" /></span>
7.  Continue with the steps and skip the latest one.

### Getting the Server Key and SenderID

1.  In the project dashboard, click on the Android App and choose the
    gear (settings) icon in the modal popup
2.  <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048639/956399620.png?height=250" class="confluence-embedded-image" height="250" /></span> <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048639/956366852.png?height=250" class="confluence-embedded-image" height="250" /></span>
3.  Select the Cloud Messaging tab. If you do not find a "Server Key",
    press Add Server Key and a new one will be generated.
4.  <span
    class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048639/955940876.png?height=250" class="confluence-embedded-image" height="250" /></span>
5.  Copy the **Server Key** value and paste it in the Server Key field
    in the Android Entrypoint configuration inside the Vivocha Campaign
    Builder.
6.  Copy the **SenderID** value, it will be needed when calling the
    VivochaNotificationManager.manager().register() method.

  

  

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 20.27.49.png](attachments/1048639/1343773.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[9b\_terminal\_openssl\_key.png](attachments/1048639/1343774.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 20.28.45.png](attachments/1048639/1343775.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[9\_export\_key.png](attachments/1048639/1343776.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[9a\_terminal\_openssl\_cert.png](attachments/1048639/1343777.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[3\_cert\_step1.png](attachments/1048639/1343782.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[2\_cert\_menu.png](attachments/1048639/1343783.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[7\_export\_cert.png](attachments/1048639/1343778.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[8\_password\_empty.png](attachments/1048639/1343779.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[5a\_keychain\_cert\_list.png](attachments/1048639/1343780.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[6\_keychain\_explode\_key.png](attachments/1048639/1343781.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[5\_cert\_step3\_ready.png](attachments/1048639/1343784.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[4\_cert\_step2\_upload.png](attachments/1048639/1343785.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 20.27.59.png](attachments/1048639/1343770.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 20.27.44.png](attachments/1048639/1343771.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 20.28.10.png](attachments/1048639/1343772.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-15 at 10.52.45.png](attachments/1048639/1343699.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-15 at 10.52.45.png](attachments/1048639/1343698.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-15 at 10.53.10.png](attachments/1048639/1343700.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-15 at 10.56.01.png](attachments/1048639/1343701.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-15 at 11.00.20.png](attachments/1048639/1343694.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-15 at 11.05.24.png](attachments/1048639/1343695.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-15 at 11.05.37.png](attachments/1048639/1343696.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-15 at 11.07.22.png](attachments/1048639/1343697.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[Screenshot 2019-02-04 at
11.35.20.png](attachments/1048639/956104705.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[Screenshot 2019-02-04 at
11.37.22.png](attachments/1048639/955908098.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[Screenshot 2019-02-04 at
11.38.04.png](attachments/1048639/956235777.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[Screenshot 2019-02-04 at
11.38.50.png](attachments/1048639/955940868.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[Screenshot 2019-02-04 at
11.39.25.png](attachments/1048639/956334084.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[Screenshot 2019-02-04 at
11.56.10.png](attachments/1048639/956399620.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[Screenshot 2019-02-04 at
11.56.16.png](attachments/1048639/956366852.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[Screenshot 2019-02-04 at
11.45.38.png](attachments/1048639/955940876.png) (image/png)  

Document generated by Confluence on Oct 23, 2019 16:12

[Atlassian](http://www.atlassian.com/)
