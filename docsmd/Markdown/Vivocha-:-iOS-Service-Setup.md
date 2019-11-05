1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [iOS](iOS_5079111.html)

<span id="title-text"> Vivocha : iOS Service Setup </span>
==========================================================

Created by <span class="author"> Michael Pett</span>, last modified by
<span class="editor"> Andrea Lovicu</span> on Jul 28, 2015

This document will explain how you can create an iOS service for your
Vivocha account.As an administrator on your account, go to "Settings"
and then click on the "Services" tab. When you click on add new service
you will be given the choice between HTML5 and iOS. Click on the iOS
button and you will be directed to the General iOS service page. 

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048640/11239471.png?height=400" class="confluence-embedded-image confluence-content-image-border image-center" height="400" /></span>

General
=======

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048640/11239442.png?height=400" class="confluence-embedded-image confluence-content-image-border image-center" height="400" /></span>

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

Activation Code
===============

 

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048640/1344038.png?height=400" class="confluence-embedded-image confluence-content-image-border image-center" height="400" /></span>

 

Copy and Paste the two lines in **bold** into your application's code.
The second line contains both your Vivocha account ID and service ID.

Engagement
==========

 

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048640/1344035.png?height=400" class="confluence-embedded-image confluence-content-image-border image-center" height="400" /></span>

 

### <span style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;color: rgb(51,51,51);font-weight: normal;"><span class="underline">Sidetab background color</span>: choose the background color of your sidetab</span>

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="underline">Sidetab text color</span>: choose the text color for
your sidetab</span>

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="underline">Sidetab text</span>: choose what you would like your
sidetab to say</span>

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="underline">Sidetab side position</span>: choose which side you
would like your sidetab to appear on (top, bottom, left, right)</span>

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="underline">Sidetab position</span>: after choosing a side, decide
how you would like your sidetab to be aligned (top, middle, bottom,
left, right)</span>

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">  
</span>

  
<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048640/1344049.png?width=643" class="confluence-embedded-image confluence-content-image-border image-center" width="643" height="375" /></span>  
  

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"> </span><span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"> 
                                                                       
                 </span>

Interaction
===========

 

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048640/1344036.png?height=400" class="confluence-embedded-image confluence-content-image-border image-center" height="400" /></span>

 

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

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="underline">Send button background color</span>: choose the color
for the background of the send button</span>

<span class="underline">Send button text color</span>: choose the color
for the text on the send button

 

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048640/9273449.png?height=400" class="confluence-embedded-image image-center" height="400" /></span>

 

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.20.15 PM.png](attachments/1048640/1344033.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.20.04 PM.png](attachments/1048640/1344036.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.19.55 PM.png](attachments/1048640/1344035.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.19.46 PM.png](attachments/1048640/1344038.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.19.13 PM.png](attachments/1048640/1344037.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.53.42.png](attachments/1048640/1344040.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.53.17.png](attachments/1048640/1344039.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.48.50.png](attachments/1048640/1344042.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.48.46.png](attachments/1048640/1344041.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.48.10.png](attachments/1048640/1344044.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.47.50.png](attachments/1048640/1344045.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.47.51.png](attachments/1048640/1344043.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.47.26.png](attachments/1048640/1344047.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.47.38.png](attachments/1048640/1344046.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.47.06.png](attachments/1048640/1344048.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.50.31 PM.png](attachments/1048640/1344049.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.54.39 PM.png](attachments/1048640/1344050.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen.png](attachments/1048640/1343802.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[ios1.png](attachments/1048640/9273449.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-07-28 at 11.54.30.png](attachments/1048640/11239438.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-07-28 at 11.51.47.png](attachments/1048640/11239440.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-07-28 at 12.02.07.png](attachments/1048640/11239442.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-07-28 at 12.39.29.png](attachments/1048640/11239473.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-07-28 at 12.39.29.png](attachments/1048640/11239471.png)
(image/png)  

Document generated by Confluence on Oct 23, 2019 16:10

[Atlassian](http://www.atlassian.com/)
