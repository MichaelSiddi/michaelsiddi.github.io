1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [iOS](iOS_5079111.html)
4.  [iOS SDK Reference](iOS-SDK-Reference_1048693.html)

<span id="title-text"> Vivocha : VivochaSDK Values - iOS </span>
================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Jul 22, 2015

VivochaSDK Values
=================

 

-   [Data Types](#VivochaSDKValues-iOS-DataTypes)
    -   [VivochaSDK Data
        types](#VivochaSDKValues-iOS-VivochaSDKDatatypes)
        -   [Contact Color -
            NSInteger](#VivochaSDKValues-iOS-ContactColor-NSInteger)
        -   [Side Tab Side -
            NSInteger](#VivochaSDKValues-iOS-SideTabSide-NSInteger)
        -   [Side Tab Position -
            NSInteger](#VivochaSDKValues-iOS-SideTabPosition-NSInteger)
        -   [Vivocha Localization Keys -
            String](#VivochaSDKValues-iOS-VivochaLocalizationKeys-String)
-   [Notification Names](#VivochaSDKValues-iOS-NotificationNames)
    -   [Notifications](#VivochaSDKValues-iOS-Notifications)
        -   [VivochaSDK Life
            Cycle](#VivochaSDKValues-iOS-VivochaSDKLifeCycle)
        -   [Agent Availability
            events](#VivochaSDKValues-iOS-AgentAvailabilityevents)
        -   [Contact Life Cycle](#VivochaSDKValues-iOS-ContactLifeCycle)

  

**  
**

Data Types
----------

### VivochaSDK Data types

#### Contact Color - NSInteger

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>VivochaContactColorWhite</span></code></pre></div></td>
<td>0</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb2"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb2-1"><a href="#cb2-1"></a>VivochaContactColorYellow</span></code></pre></div></td>
<td>1</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb3"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb3-1"><a href="#cb3-1"></a>VivochaContactColorOrange</span></code></pre></div></td>
<td>2</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb4"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb4-1"><a href="#cb4-1"></a>VivochaContactColorGreen</span></code></pre></div></td>
<td>3</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb5"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb5-1"><a href="#cb5-1"></a>VivochaContactColorBlue</span></code></pre></div></td>
<td>4</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb6"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb6-1"><a href="#cb6-1"></a>VivochaContactColorPurple</span></code></pre></div></td>
<td>5</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb7"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb7-1"><a href="#cb7-1"></a>VivochaContactColorRed</span></code></pre></div></td>
<td>6</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb8"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb8-1"><a href="#cb8-1"></a>VivochaContactColorDefault</span></code></pre></div></td>
<td><div class="sourceCode" id="cb9"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb9-1"><a href="#cb9-1"></a>VivochaContactColorRed</span></code></pre></div></td>
</tr>
</tbody>
</table>

#### Side Tab Side - NSInteger

These values defines in which side of the screen the side tab will be
placed.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>VivochaPositionSideUp</span></code></pre></div></td>
<td>1</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb2"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb2-1"><a href="#cb2-1"></a>VivochaPositionSideDown</span></code></pre></div></td>
<td>2</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb3"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb3-1"><a href="#cb3-1"></a>VivochaPositionSideLeft</span></code></pre></div></td>
<td>3</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb4"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb4-1"><a href="#cb4-1"></a>VivochaPositionSideRight</span></code></pre></div></td>
<td>4</td>
</tr>
</tbody>
</table>

#### Side Tab Position - NSInteger

These values defines in which section of the selected side the tab bar
will be placed.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>VivochaPositionTop</span></code></pre></div></td>
<td>1</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb2"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb2-1"><a href="#cb2-1"></a>VivochaPositionMiddle</span></code></pre></div></td>
<td>2</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb3"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb3-1"><a href="#cb3-1"></a>VivochaPositionBottom</span></code></pre></div></td>
<td>3</td>
</tr>
</tbody>
</table>

 

#### Vivocha Localization Keys - String

 

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Example String</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>VivochaSDK_String_Agent</span></code></pre></div></td>
<td>Agent</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_Agent_Typing</code></pre></td>
<td><p>is typing...</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>VivochaSDK_String_Agent_Online</code></pre></td>
<td>is Online.</td>
<td> </td>
</tr>
<tr class="even">
<td><pre class="p1"><code>VivochaSDK_String_Agent_Offline</code></pre></td>
<td>is Offline.</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_Agent_Waiting</code></pre></td>
<td>Waiting for an agent</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_Agent_Waiting_Transfer</code></pre></td>
<td>Transfer in progress</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringChatConnecting</code></pre></td>
<td>Connecting...</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_SideTab</code></pre></td>
<td>Live Help</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Btn_Minimize</code></pre></td>
<td>Minimize</td>
<td>The iPad shows "<strong>v Minimize</strong>" instead of "<strong>&lt; Back</strong>" in the Chat View</td>
</tr>
<tr class="even">
<td><pre class="p1"><code>VivochaSDK_String_UI_Btn_Back</code></pre></td>
<td>Back</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Btn_Close</code></pre></td>
<td>Close</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Btn_Send</code></pre></td>
<td>Send</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Alert_Btn_OK</code></pre></td>
<td>OK</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Alert_Btn_NO</code></pre></td>
<td>No</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Alert_Btn_Cancel</code></pre></td>
<td>Cancel</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Alert_Location_Settings_Title</code></pre></td>
<td>Location Service Disabled</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Alert_Location_Settings_Message</code></pre></td>
<td><span>To enable, please go to Settings -&gt; Privacy -&gt; Location and turn on Location Services for this app.</span></td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Alert_Location_Auth_Title</code></pre></td>
<td>Location Request</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Alert_Location_Auth_Message</code></pre></td>
<td><p>Do you want to allow the agent to see your location?</p></td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Alert_Screenshot_Auth_Title</code></pre></td>
<td>Screenshot Request</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Alert_Screenshot_Auth_Message</code></pre></td>
<td>Do you want to allow the agent to see your screen?</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Alert_Chat_Cleared_Message</code></pre></td>
<td>The chat has been closed. Thank you.</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Alert_Chat_Unavailable_Message</code></pre></td>
<td>The chat is not currently available.</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Alert_Chat_Unavailable_Btn_OK</code></pre></td>
<td>Retry</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Alert_Chat_Unavailable_Btn_Cancel</code></pre></td>
<td>End</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Alert_Contact_Creation_Failure_Message</code></pre></td>
<td>There was an error establishing the contact. Please try again later.</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Alert_Media_Incoming_Video_Title</code></pre></td>
<td>Incoming video call</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Alert_Media_Incoming_Video_Message</code></pre></td>
<td>The agent wants to start a video call</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Alert_Media_Incoming_Audio_Title</code></pre></td>
<td>Incoming audio call</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Alert_Media_Incoming_Audio_Message</code></pre></td>
<td>The agent wants to start an audio call</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Alert_Media_OK</code></pre></td>
<td>Accept</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Alert_Media_NO</code></pre></td>
<td>No, thanks</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Alert_Media_AudioOnly</code></pre></td>
<td>Audio only</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Media_AgentReject_Message</code></pre></td>
<td>Rejected by the agent</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Media_AudioInProgress_Message</code></pre></td>
<td>Audio call in progress</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Media_Error_Message</code></pre></td>
<td>An error has occurred</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Media_WaitingAgent_Message</code></pre></td>
<td>Waiting for the agent</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Media_Connecting_Message</code></pre></td>
<td>Establishing connection...</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Attachment_CameraRoll_Button_Title</code></pre></td>
<td>Photo Library</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Attachment_CameraTakePhoto_Button_Title</code></pre></td>
<td>Take Photo</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Attachment_Cancel_Button_Title</code></pre></td>
<td>Cancel</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Attachment_Resend_Alert_Title</code></pre></td>
<td>Do you want to try again?</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Attachment_Resend_Button_Title</code></pre></td>
<td>Resend</td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_String_UI_Attachment_Viewer_Close_Button_Title</code></pre></td>
<td>Close</td>
<td> </td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_String_UI_Attachment_Open_Alert_Title</code></pre></td>
<td><p><span class="s1">Do you want to open the file?</span></p></td>
<td> </td>
</tr>
</tbody>
</table>

Notification Names
------------------

### Notifications

 

The SDK uses NSNotification objects to notify you about the events that
happen during the life of the Vivocha singleton.

 

#### VivochaSDK Life Cycle

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>VivochaSDK_Notif_Start</code></pre></td>
<td>Sent when the SDK starts.</td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_Notif_Stop</code></pre></td>
<td>Sent when the SDK stops.</td>
</tr>
</tbody>
</table>

#### Agent Availability events

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>VivochaSDK_Notif_AvailableAgents</code></pre></td>
<td>Sent when there are available agents (with available slots for chat).</td>
</tr>
<tr class="even">
<td><pre class="p2"><code>VivochaSDK_Notif_UnavailableAgents</code></pre></td>
<td>Sent when there are no available agents (with available slots for chat) or if an error occurred fetching the information.</td>
</tr>
</tbody>
</table>

#### Contact Life Cycle

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>VivochaSDK_Notif_CreateContactResult</code></pre></td>
<td>Sent after a 'Create New Contact' request. It brings either the Contact object or an NSError object.</td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_Notif_Contact_SentTextMessageResult</code></pre></td>
<td>Sent as receipt for the VivochaMessage sent with the Contact sendTextMessage: method.</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_Notif_Contact_DidSendCustomActionResult</code></pre></td>
<td> Sent as receipt for the VivochaCustomAction sent with the Contact sendCustomAction: method.</td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_Notif_Contact_ReceivedTextMessage</code></pre></td>
<td> Sent when a Contact receives a text message from the Agent. It brings the VivochaMessage object.</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaSDK_Notif_Contact_ReceivedTerminationEventFromOtherPeer</code></pre></td>
<td> Sent when the agent terminates the Contact from the Agent Desktop.</td>
</tr>
<tr class="even">
<td><pre><code>VivochaSDK_Notif_Contact_Terminated</code></pre></td>
<td><p>Sent when the Contact is terminated.</p></td>
</tr>
</tbody>
</table>

Document generated by Confluence on Oct 23, 2019 16:11

[Atlassian](http://www.atlassian.com/)
