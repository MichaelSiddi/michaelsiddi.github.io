# How to get an API Key to use FCM (Android Push Notification Service)

## How to get an API Key to use Firebase Cloud Messaging (Android Push Notification Service)

In order to enable your Vivocha powered application to receive push
notifications from the agents you needs to configure your Android
Service with the FCM Api Key.

  

Log in to the Firebase Console (<https://console.firebase.google.com>)

### Creating a project

1.  Press the Create Project button  
    ![](attachments/1048639/956104705.png?height=400){height="400"}
2.  Compile the form with your project name  
    ![](attachments/1048639/955908098.png?height=400){height="400"}
3.  Wait until the project has been created
4.  Press the Android icon to add an Android App to your new project  
    ![](attachments/1048639/955940868.png?height=250){height="250"}
5.  Compile the Android Package Name with the one used by your app
6.  ![](attachments/1048639/956334084.png?height=250){height="250"}
7.  Continue with the steps and skip the latest one.

### Getting the Server Key and SenderID

1.  In the project dashboard, click on the Android App and choose the
    gear (settings) icon in the modal popup
2.  ![](attachments/1048639/956399620.png?height=250){height="250"} ![](attachments/1048639/956366852.png?height=250){height="250"}
3.  Select the Cloud Messaging tab. If you do not find a "Server Key",
    press Add Server Key and a new one will be generated.
4.  ![](attachments/1048639/955940876.png?height=250){height="250"}
5.  Copy the **Server Key** value and paste it in the Server Key field
    in the Android Entrypoint configuration inside the Vivocha Campaign
    Builder.
6.  Copy the **SenderID** value, it will be needed when calling the
    VivochaNotificationManager.manager().register() method.

  

  

## Attachments:

![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 20.27.49.png](attachments/1048639/1343773.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[9b\_terminal\_openssl\_key.png](attachments/1048639/1343774.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 20.28.45.png](attachments/1048639/1343775.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[9\_export\_key.png](attachments/1048639/1343776.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[9a\_terminal\_openssl\_cert.png](attachments/1048639/1343777.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[3\_cert\_step1.png](attachments/1048639/1343782.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[2\_cert\_menu.png](attachments/1048639/1343783.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[7\_export\_cert.png](attachments/1048639/1343778.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[8\_password\_empty.png](attachments/1048639/1343779.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[5a\_keychain\_cert\_list.png](attachments/1048639/1343780.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[6\_keychain\_explode\_key.png](attachments/1048639/1343781.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[5\_cert\_step3\_ready.png](attachments/1048639/1343784.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[4\_cert\_step2\_upload.png](attachments/1048639/1343785.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 20.27.59.png](attachments/1048639/1343770.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 20.27.44.png](attachments/1048639/1343771.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-28 at 20.28.10.png](attachments/1048639/1343772.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-07-15 at 10.52.45.png](attachments/1048639/1343699.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-07-15 at 10.52.45.png](attachments/1048639/1343698.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-07-15 at 10.53.10.png](attachments/1048639/1343700.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-07-15 at 10.56.01.png](attachments/1048639/1343701.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-07-15 at 11.00.20.png](attachments/1048639/1343694.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-07-15 at 11.05.24.png](attachments/1048639/1343695.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-07-15 at 11.05.37.png](attachments/1048639/1343696.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-07-15 at 11.07.22.png](attachments/1048639/1343697.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screenshot
2019-02-04 at 11.35.20.png](attachments/1048639/956104705.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screenshot
2019-02-04 at 11.37.22.png](attachments/1048639/955908098.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screenshot
2019-02-04 at 11.38.04.png](attachments/1048639/956235777.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screenshot
2019-02-04 at 11.38.50.png](attachments/1048639/955940868.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screenshot
2019-02-04 at 11.39.25.png](attachments/1048639/956334084.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screenshot
2019-02-04 at 11.56.10.png](attachments/1048639/956399620.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screenshot
2019-02-04 at 11.56.16.png](attachments/1048639/956366852.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screenshot
2019-02-04 at 11.45.38.png](attachments/1048639/955940876.png)
(image/png)  
