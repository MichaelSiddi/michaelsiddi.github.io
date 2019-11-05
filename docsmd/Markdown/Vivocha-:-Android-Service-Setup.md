1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [Android](Android_5079113.html)

<span id="title-text"> Vivocha : Android Service Setup </span>
==============================================================

Created by <span class="author"> Michael Siddi</span>, last modified by
<span class="editor"> Andrea Lovicu</span> on Jul 28, 2015

This document will explain how you can create an Android service for
your Vivocha account.As an administrator on your account, go to
"Settings" and then click on the "Services" tab. When you click on add
new service you will be given the choice between HTML, iOS and Android.
Click on the Android button and you will be directed to the General
Android service page. 

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048638/11239469.png?height=400" class="confluence-embedded-image confluence-content-image-border image-center" height="400" /></span>

General
=======

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048638/11239447.png?width=576" class="confluence-embedded-image confluence-content-image-border image-center" width="576" height="400" /></span>

 

<span class="underline">Service name</span>: the name you would like to
see for your service on Vivocha

<span class="underline">Bundle ID</span>: is a string in reverse DNS
format using only letters, periods and hyphens. It must be the same as
the bundle ID for your Android application that you would like to
integrate with Vivocha.

<span class="underline">Use Push Notifications</span>: You can activate
the push notifications if you would like to make it so that when the app
is closed the user will receive a notification for a message from the
agent.

          - You must insert the server key string if you would like to
use the push notifications. Simply follow the link to the SDK
documentation to learn how to generate it. 

<span class="underline">Service Color</span>: change the color that your
agents will see when a customer requests a chat.

<span class="underline">Service tags</span>: insert a tag so that you
can organize both your agents and services.

<span class="underline">Optional tags</span>: (available on Enterprise
accounts only), this tags are used by the skill based routing algorithm
to route contacts to agents. If enabled, the system will assign the
contact to the agent that has the closest match with the set of optional
tags. See more on
routing [documentation](https://vivocha.atlassian.net/wiki/spaces/VVCJ/pages/11239426/Routing+and+Distribution).

Activation Code
===============

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048638/1343809.png?width=900" class="confluence-embedded-image image-center" width="900" /></span>

 

Copy and Paste the two lines indicated by the arrows into your
application's code. The second line contains both your Vivocha account
ID and service ID.

Engagement
==========

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048638/1343808.png?width=900" class="confluence-embedded-image image-center" width="900" /></span>

 

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
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048638/1343813.png?width=700" class="confluence-embedded-image image-center" width="700" /></span>  
  
  

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"> </span><span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"> 
                                                                       
                 </span>

Interaction
===========

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048638/1343806.png?width=900" class="confluence-embedded-image image-center" width="900" /></span>

 

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
the image present in the Android application bundle that will be used as
the chat's background image

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="underline">Send button background color</span>: choose the color
for the background of the send button</span>

<span class="underline">Send button text color</span>: choose the color
for the text on the send button

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="assets/images/1048638/9273439.png?width=400" class="confluence-embedded-image image-center" width="400" /></span>

 

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.54.39 PM.png](attachments/1048638/1343788.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.47.26.png](attachments/1048638/1343792.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.48.50.png](attachments/1048638/1343797.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.47.38.png](attachments/1048638/1343787.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.50.31 PM.png](attachments/1048638/1343789.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.47.50.png](attachments/1048638/1343790.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.53.17.png](attachments/1048638/1343794.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.47.51.png](attachments/1048638/1343793.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.48.46.png](attachments/1048638/1343791.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.48.10.png](attachments/1048638/1343796.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.19.13 PM.png](attachments/1048638/1343801.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.19.46 PM.png](attachments/1048638/1343800.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.20.15 PM.png](attachments/1048638/1343805.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.20.04 PM.png](attachments/1048638/1343798.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-15 at 9.19.55 PM.png](attachments/1048638/1343799.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.53.42.png](attachments/1048638/1343795.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [iOS
Simulator Screen shot 15 Jan 2014
20.47.06.png](attachments/1048638/1343786.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-10 at 18.04.43.png](attachments/1048638/1343804.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_foundry.png](attachments/1048638/1343803.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_activation\_code.png](attachments/1048638/1343812.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-11 at 11.11.38.png](attachments/1048638/1343807.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-11 at 11.11.38.png](attachments/1048638/1343808.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-07-11 at 11.11.47.png](attachments/1048638/1343806.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[tabs.png](attachments/1048638/1343813.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[android\_activation\_code.png](attachments/1048638/1343809.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[chat\_android.png](attachments/1048638/1343811.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[and1.png](attachments/1048638/9273439.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-07-28 at 11.54.30.png](attachments/1048638/11239445.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-07-28 at 12.02.43.png](attachments/1048638/11239447.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2015-07-28 at 12.39.48.png](attachments/1048638/11239469.png)
(image/png)  

Document generated by Confluence on Oct 23, 2019 16:11

[Atlassian](http://www.atlassian.com/)
