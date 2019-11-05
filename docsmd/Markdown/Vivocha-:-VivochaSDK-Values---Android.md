1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [Android](Android_5079113.html)
4.  [Android SDK Reference](Android-SDK-Reference_1048613.html)

<span id="title-text"> Vivocha : VivochaSDK Values - Android </span>
====================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Jul 22, 2015

VivochaSDK Values
=================

 

-   [Data Types](#VivochaSDKValues-Android-DataTypes)
    -   [VivochaSDK Data
        types](#VivochaSDKValues-Android-VivochaSDKDatatypes)
        -   [Contact Color -
            String](#VivochaSDKValues-Android-ContactColor-String)
        -   [Data Collection Field Type -
            String](#VivochaSDKValues-Android-DataCollectionFieldType-String)
        -   [Vivocha Localization Keys -
            String](#VivochaSDKValues-Android-VivochaLocalizationKeys-String)
        -   [Side Tab Side -
            int](#VivochaSDKValues-Android-SideTabSide-int)
        -   [Side Tab Position -
            int](#VivochaSDKValues-Android-SideTabPosition-int)
        -   [Stream Connection State -
            int](#VivochaSDKValues-Android-StreamConnectionState-int)
        -   [Contact Disconnection Cause -
            int](#VivochaSDKValues-Android-ContactDisconnectionCause-int)
        -   [Contact Agent Presence Type -
            int](#VivochaSDKValues-Android-ContactAgentPresenceType-int)

  

Data Types
----------

### VivochaSDK Data types

#### Contact Color - String

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
<td>"white"</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb2"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb2-1"><a href="#cb2-1"></a>VivochaContactColorYellow</span></code></pre></div></td>
<td>"yellow"</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb3"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb3-1"><a href="#cb3-1"></a>VivochaContactColorOrange</span></code></pre></div></td>
<td>"orange"</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb4"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb4-1"><a href="#cb4-1"></a>VivochaContactColorGreen</span></code></pre></div></td>
<td>"green"</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb5"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb5-1"><a href="#cb5-1"></a>VivochaContactColorBlue</span></code></pre></div></td>
<td>"blue"</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb6"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb6-1"><a href="#cb6-1"></a>VivochaContactColorPurple</span></code></pre></div></td>
<td>"purple"</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb7"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb7-1"><a href="#cb7-1"></a>VivochaContactColorRed</span></code></pre></div></td>
<td>"red"</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb8"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb8-1"><a href="#cb8-1"></a>VivochaContactColorDefault</span></code></pre></div></td>
<td><div class="sourceCode" id="cb9"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb9-1"><a href="#cb9-1"></a>VivochaContactColorRed</span></code></pre></div></td>
</tr>
</tbody>
</table>

#### Data Collection Field Type - String

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>VivochaDataCollectionFieldTypeDate</span></code></pre></div></td>
<td>"date"</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb2"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb2-1"><a href="#cb2-1"></a>VivochaDataCollectionFieldTypeEmail</span></code></pre></div></td>
<td>"email"</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb3"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb3-1"><a href="#cb3-1"></a>VivochaDataCollectionFieldTypeLink</span></code></pre></div></td>
<td>"link"</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb4"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb4-1"><a href="#cb4-1"></a>VivochaDataCollectionFieldTypeNickname</span></code></pre></div></td>
<td>"nickname"</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb5"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb5-1"><a href="#cb5-1"></a>VivochaDataCollectionFieldTypeNumber</span></code></pre></div></td>
<td>"number"</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb6"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb6-1"><a href="#cb6-1"></a>VivochaDataCollectionFieldTypePhone</span></code></pre></div></td>
<td>"phone"</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb7"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb7-1"><a href="#cb7-1"></a>VivochaDataCollectionFieldTypeCheckbox</span></code></pre></div></td>
<td>"checkbox"</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb8"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb8-1"><a href="#cb8-1"></a>VivochaDataCollectionFieldTypeFirstName</span></code></pre></div></td>
<td>"firstname"</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb9"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb9-1"><a href="#cb9-1"></a>VivochaDataCollectionFieldTypeLastName</span></code></pre></div></td>
<td>"lastname"</td>
</tr>
</tbody>
</table>

#### Vivocha Localization Keys - String

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Example String</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>VivochaStringAgent</span></code></pre></div></td>
<td>Agent</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringAgentTyping</code></pre></td>
<td><p>is typing...</p></td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>VivochaStringAgentOnline</code></pre></td>
<td>is Online.</td>
</tr>
<tr class="even">
<td><pre class="p1"><code>VivochaStringAgentOffline</code></pre></td>
<td>is Offline.</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringAgentWaiting</code></pre></td>
<td><span>Waiting for an agent</span></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringAgentWaitingTransfer</code></pre></td>
<td><span>Transfer in progress</span></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringChatConnecting</code></pre></td>
<td><span>Connecting...</span></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUISideTab</code></pre></td>
<td>Live Help</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIBtnMinimize</code></pre></td>
<td>Minimize</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIBtnClose</code></pre></td>
<td><span>Close</span></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIBtnSend</code></pre></td>
<td><span>Send</span></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertBtnOK</code></pre></td>
<td><span>OK</span></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertBtnNO</code></pre></td>
<td><span>No</span></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertBtnCancel</code></pre></td>
<td><span>Cancel</span></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertLocationSettingsTitle</code></pre></td>
<td><span>Location Service Disabled</span></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertLocationSettingsMessage</code></pre></td>
<td><p>To enable, please go to Settings and turn on Location Services.</p></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertLocationSettingsBtnSettings</code></pre></td>
<td><span>Settings</span></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertLocationAuthTitle</code></pre></td>
<td><span>Location Request</span></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertLocationAuthMessage</code></pre></td>
<td><p>Do you want to allow the agent to see your location?</p></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertScreenshotAuthTitle</code></pre></td>
<td><span>Screenshot Request</span></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertScreenshotAuthMessage</code></pre></td>
<td><span>Do you want to allow the agent to see your screen?</span></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertChatClearedMessage</code></pre></td>
<td><span>The chat has been closed. Thank you.</span></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertChatUnavailableMessage</code></pre></td>
<td><span>The chat is not currently available.</span></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertChatUnavailableBtnOK</code></pre></td>
<td><span>Retry</span></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertChatUnavailableBtnCancel</code></pre></td>
<td><span>End</span></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertContactCreationFailureMessage</code></pre></td>
<td><span>There was an error establishing the contact. Please try again later.</span></td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>VivochaStringUIAlertMediaIncomingVideoTitle</code></pre></td>
<td><p>Incoming video call</p></td>
</tr>
<tr class="even">
<td><pre class="p1"><code>VivochaStringUIAlertMediaIncomingVideoMessage</code></pre></td>
<td><p>The agent wants to start a video call</p></td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>VivochaStringUIAlertMediaIncomingAudioTitle</code></pre></td>
<td><p>Incoming audio call</p></td>
</tr>
<tr class="even">
<td><pre class="p1"><code>VivochaStringUIAlertMediaIncomingAudioMessage</code></pre></td>
<td><p>The agent wants to start an audio call</p></td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>VivochaStringUIAlertMediaOK</code></pre></td>
<td><p>Accept</p></td>
</tr>
<tr class="even">
<td><pre class="p1"><code>VivochaStringUIAlertMediaNO</code></pre></td>
<td><p>No, thanks</p></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertMediaAudioOnly</code></pre></td>
<td><p>Audio only</p></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIMediaAgentRejectMessage</code></pre></td>
<td><p>Rejected by the agent</p></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIMediaAudioInProgressMessage</code></pre></td>
<td><p>Audio call in progress</p></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIMediaErrorMessage</code></pre></td>
<td><p>An error has occurred</p></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIMediaWaitingAgentMessage</code></pre></td>
<td><p>Waiting for the agent</p></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIMediaConnectingMessage</code></pre></td>
<td>Establishing connection...</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAttachmentChoiceTitle</code></pre></td>
<td>Send a photo</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAttachmentCameraRollButtonTitle</code></pre></td>
<td>Photo Library</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAttachmentCameraTakePhotoButtonTitle</code></pre></td>
<td>Take Photo</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAttachmentCancelButtonTitle</code></pre></td>
<td>Cancel</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAttachmentResendAlertTitle</code></pre></td>
<td>Do you want to try again?</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAttachmentResendButtonTitle</code></pre></td>
<td>Resend</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAttachmentOpenAlertTitle</code></pre></td>
<td>Do you want to open the file?</td>
</tr>
</tbody>
</table>

 

#### Side Tab Side - int

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

#### Side Tab Position - int

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

#### Stream Connection State - int

These values defines in which state the stream connection could be.

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>VivochaConnectionStateDidFailAuthentication</span></code></pre></div></td>
<td>1</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb2"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb2-1"><a href="#cb2-1"></a>VivochaConnectionStateConnecting</span></code></pre></div></td>
<td>2</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb3"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb3-1"><a href="#cb3-1"></a>VivochaConnectionStateConnected</span></code></pre></div></td>
<td>3</td>
</tr>
<tr class="even">
<td>VivochaConnectionStateDisconnecting</td>
<td>4</td>
</tr>
<tr class="odd">
<td>VivochaConnectionStateDisconnectedWithTimeout</td>
<td>5</td>
</tr>
<tr class="even">
<td>VivochaConnectionStateDisconnectedWithError</td>
<td>6</td>
</tr>
<tr class="odd">
<td>VivochaConnectionStateDisconnected</td>
<td>7</td>
</tr>
</tbody>
</table>

#### Contact Disconnection Cause - int

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>VivochaConnectionReasonOK (<span class="fu">no</span> error)</span></code></pre></div></td>
<td>0</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb2"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb2-1"><a href="#cb2-1"></a>VivochaConnectionReasonTimeout</span></code></pre></div></td>
<td>1</td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb3"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb3-1"><a href="#cb3-1"></a>VivochaConnectionReasonError</span></code></pre></div></td>
<td>2</td>
</tr>
<tr class="even">
<td>VivochaConnectionReasonReconnectionError</td>
<td>3</td>
</tr>
<tr class="odd">
<td>VivochaConnectionReasonErrorAuth</td>
<td>4</td>
</tr>
</tbody>
</table>

#### Contact Agent Presence Type - int

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>VivochaChatPresenceTypeOnline</span></code></pre></div></td>
<td>1</td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb2"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb2-1"><a href="#cb2-1"></a>VivochaChatPresenceTypeGone</span></code></pre></div></td>
<td>2</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaChatPresenceTypeTransfer - FOR FUTURE USE</code></pre></td>
<td>3</td>
</tr>
</tbody>
</table>

 

 

 

Document generated by Confluence on Oct 23, 2019 16:12

[Atlassian](http://www.atlassian.com/)
