# iOS Service Setup

This document will explain how you can create an iOS service for your
Vivocha account.As an administrator on your account, go to "Settings"
and then click on the "Services" tab. When you click on add new service
you will be given the choice between HTML5 and iOS. Click on the iOS
button and you will be directed to the General iOS service page. 

![](attachments/1048640/11239471.png?height=400){.image-center
height="400"}

# General

![](attachments/1048640/11239442.png?height=400){.image-center
height="400"}

<span class="underline">Service name</span>: the name you would like to
see for your service on Vivocha

<span class="underline">Bundle ID</span>: is a string in reverse DNS
format using only letters, periods and hyphens. It must be the same as
the bundle ID for your iOS application that you would like to integrate
with Vivocha.

<span class="underline">Use Push Notifications</span>: You can activate
the push notifications if you would like to make it so that when the app
is closed the user will receive a notification for a message from the
agent.

          - You must insert the certificate string and key string if you
would like to use the push notifications. Simply follow the link to the
SDK documentation to learn how to generate it. 

<span class="underline">Service Color</span>: change the color that your
agents will see when a customer requests a chat.

<span class="underline">Service tags</span>: insert a tag so that you
can organize both your agents and services.

<span class="underline">Optional tags</span>: (available on Enterprise
accounts only), this tags are used by the skill based routing algorithm
to route contacts to agents. If enabled, the system will assign the
contact to the agent that has the closest match with the set of optional
tags. See more on routing
[documentation](https://vivocha.atlassian.net/wiki/spaces/VVCJ/pages/11239426/Routing+and+Distribution).

# Activation Code

 

![](attachments/1048640/1344038.png?height=400){.image-center
height="400"}

 

Copy and Paste the two lines in **bold** into your application's code.
The second line contains both your Vivocha account ID and service ID.

# Engagement

 

![](attachments/1048640/1344035.png?height=400){.image-center
height="400"}

 

### Sidetab background color: choose the background color of your sidetab

Sidetab text color: choose the text color for your sidetab

Sidetab text: choose what you would like your sidetab to say

Sidetab side position: choose which side you would like your sidetab to
appear on (top, bottom, left, right)

Sidetab position: after choosing a side, decide how you would like your
sidetab to be aligned (top, middle, bottom, left, right)

  
![](attachments/1048640/1344049.png?width=643){.image-center width="643"
height="375"}  
  

                                                                        
                   

# Interaction

 

![](attachments/1048640/1344036.png?height=400){.image-center
height="400"}

 

<span class="underline">Chat balloon corner radius</span>: define the
roundness of the corners of the chat balloon

<span class="underline">Chat balloon background color (agent)</span>:
choose the background color that the customers will see for the agent's
balloon when chatting

<span class="underline">Chat balloon text color (agent)</span>: choose
the text color that the customers will see for the agent when chatting

<span class="underline">Chat balloon background color
(customer)</span>: choose the background color that the customers will
see for their balloon when chatting

<span class="underline">Chat balloon text color
(customer)</span>: choose the text color that the customers will see for
themselves when chatting

<span class="underline">Chat balloon text color (system)</span>: the
color of the text that appears for system messages.

<span class="underline">Chat background color</span>: background color
that appears behind the balloons

<span class="underline">Chat background image name</span>: the name of
the image present in the iOS application bundle that will be used as the
chat's background image

Send button background color: choose the color for the background of the
send button

<span class="underline">Send button text color</span>: choose the color
for the text on the send button

 

![](attachments/1048640/9273449.png?height=400){.image-center
height="400"}

 

## Attachments:

![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-15 at 9.20.15 PM.png](attachments/1048640/1344033.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-15 at 9.20.04 PM.png](attachments/1048640/1344036.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-15 at 9.19.55 PM.png](attachments/1048640/1344035.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-15 at 9.19.46 PM.png](attachments/1048640/1344038.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-15 at 9.19.13 PM.png](attachments/1048640/1344037.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [iOS Simulator
Screen shot 15 Jan 2014 20.53.42.png](attachments/1048640/1344040.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [iOS Simulator
Screen shot 15 Jan 2014 20.53.17.png](attachments/1048640/1344039.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [iOS Simulator
Screen shot 15 Jan 2014 20.48.50.png](attachments/1048640/1344042.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [iOS Simulator
Screen shot 15 Jan 2014 20.48.46.png](attachments/1048640/1344041.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [iOS Simulator
Screen shot 15 Jan 2014 20.48.10.png](attachments/1048640/1344044.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [iOS Simulator
Screen shot 15 Jan 2014 20.47.50.png](attachments/1048640/1344045.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [iOS Simulator
Screen shot 15 Jan 2014 20.47.51.png](attachments/1048640/1344043.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [iOS Simulator
Screen shot 15 Jan 2014 20.47.26.png](attachments/1048640/1344047.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [iOS Simulator
Screen shot 15 Jan 2014 20.47.38.png](attachments/1048640/1344046.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [iOS Simulator
Screen shot 15 Jan 2014 20.47.06.png](attachments/1048640/1344048.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-15 at 9.50.31 PM.png](attachments/1048640/1344049.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2014-01-15 at 9.54.39 PM.png](attachments/1048640/1344050.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [iOS Simulator
Screen.png](attachments/1048640/1343802.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"}
[ios1.png](attachments/1048640/9273449.png) (image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2015-07-28 at 11.54.30.png](attachments/1048640/11239438.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2015-07-28 at 11.51.47.png](attachments/1048640/11239440.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2015-07-28 at 12.02.07.png](attachments/1048640/11239442.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2015-07-28 at 12.39.29.png](attachments/1048640/11239473.png)
(image/png)  
![](images/icons/bullet_blue.gif){width="8" height="8"} [Screen Shot
2015-07-28 at 12.39.29.png](attachments/1048640/11239471.png)
(image/png)  
