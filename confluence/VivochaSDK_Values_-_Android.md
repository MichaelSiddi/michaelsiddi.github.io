# VivochaSDK Values - Android

# VivochaSDK Values

 

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

  

## Data Types

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
<td><pre><code>VivochaContactColorWhite</code></pre></td>
<td>"white"</td>
</tr>
<tr class="even">
<td><pre><code>VivochaContactColorYellow</code></pre></td>
<td>"yellow"</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaContactColorOrange</code></pre></td>
<td>"orange"</td>
</tr>
<tr class="even">
<td><pre><code>VivochaContactColorGreen</code></pre></td>
<td>"green"</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaContactColorBlue</code></pre></td>
<td>"blue"</td>
</tr>
<tr class="even">
<td><pre><code>VivochaContactColorPurple</code></pre></td>
<td>"purple"</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaContactColorRed</code></pre></td>
<td>"red"</td>
</tr>
<tr class="even">
<td><pre><code>VivochaContactColorDefault</code></pre></td>
<td><pre><code>VivochaContactColorRed</code></pre></td>
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
<td><pre><code>VivochaDataCollectionFieldTypeDate</code></pre></td>
<td>"date"</td>
</tr>
<tr class="even">
<td><pre><code>VivochaDataCollectionFieldTypeEmail</code></pre></td>
<td>"email"</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaDataCollectionFieldTypeLink</code></pre></td>
<td>"link"</td>
</tr>
<tr class="even">
<td><pre><code>VivochaDataCollectionFieldTypeNickname</code></pre></td>
<td>"nickname"</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaDataCollectionFieldTypeNumber</code></pre></td>
<td>"number"</td>
</tr>
<tr class="even">
<td><pre><code>VivochaDataCollectionFieldTypePhone</code></pre></td>
<td>"phone"</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaDataCollectionFieldTypeCheckbox</code></pre></td>
<td>"checkbox"</td>
</tr>
<tr class="even">
<td><pre><code>VivochaDataCollectionFieldTypeFirstName</code></pre></td>
<td>"firstname"</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaDataCollectionFieldTypeLastName</code></pre></td>
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
<td><pre><code>VivochaStringAgent</code></pre></td>
<td>Agent</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringAgentTyping</code></pre></td>
<td><p>is typing...</p></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringAgentOnline</code></pre></td>
<td>is Online.</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringAgentOffline</code></pre></td>
<td>is Offline.</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringAgentWaiting</code></pre></td>
<td>Waiting for an agent</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringAgentWaitingTransfer</code></pre></td>
<td>Transfer in progress</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringChatConnecting</code></pre></td>
<td>Connecting...</td>
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
<td>Close</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIBtnSend</code></pre></td>
<td>Send</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertBtnOK</code></pre></td>
<td>OK</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertBtnNO</code></pre></td>
<td>No</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertBtnCancel</code></pre></td>
<td>Cancel</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertLocationSettingsTitle</code></pre></td>
<td>Location Service Disabled</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertLocationSettingsMessage</code></pre></td>
<td><p>To enable, please go to Settings and turn on Location Services.</p></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertLocationSettingsBtnSettings</code></pre></td>
<td>Settings</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertLocationAuthTitle</code></pre></td>
<td>Location Request</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertLocationAuthMessage</code></pre></td>
<td><p>Do you want to allow the agent to see your location?</p></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertScreenshotAuthTitle</code></pre></td>
<td>Screenshot Request</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertScreenshotAuthMessage</code></pre></td>
<td>Do you want to allow the agent to see your screen?</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertChatClearedMessage</code></pre></td>
<td>The chat has been closed. Thank you.</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertChatUnavailableMessage</code></pre></td>
<td>The chat is not currently available.</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertChatUnavailableBtnOK</code></pre></td>
<td>Retry</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertChatUnavailableBtnCancel</code></pre></td>
<td>End</td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertContactCreationFailureMessage</code></pre></td>
<td>There was an error establishing the contact. Please try again later.</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertMediaIncomingVideoTitle</code></pre></td>
<td><p>Incoming video call</p></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertMediaIncomingVideoMessage</code></pre></td>
<td><p>The agent wants to start a video call</p></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertMediaIncomingAudioTitle</code></pre></td>
<td><p>Incoming audio call</p></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertMediaIncomingAudioMessage</code></pre></td>
<td><p>The agent wants to start an audio call</p></td>
</tr>
<tr class="odd">
<td><pre><code>VivochaStringUIAlertMediaOK</code></pre></td>
<td><p>Accept</p></td>
</tr>
<tr class="even">
<td><pre><code>VivochaStringUIAlertMediaNO</code></pre></td>
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
<td><pre><code>VivochaPositionSideUp</code></pre></td>
<td>1</td>
</tr>
<tr class="even">
<td><pre><code>VivochaPositionSideDown</code></pre></td>
<td>2</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaPositionSideLeft</code></pre></td>
<td>3</td>
</tr>
<tr class="even">
<td><pre><code>VivochaPositionSideRight</code></pre></td>
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
<td><pre><code>VivochaPositionTop</code></pre></td>
<td>1</td>
</tr>
<tr class="even">
<td><pre><code>VivochaPositionMiddle</code></pre></td>
<td>2</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaPositionBottom</code></pre></td>
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
<td><pre><code>VivochaConnectionStateDidFailAuthentication</code></pre></td>
<td>1</td>
</tr>
<tr class="even">
<td><pre><code>VivochaConnectionStateConnecting</code></pre></td>
<td>2</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaConnectionStateConnected</code></pre></td>
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
<td><pre><code>VivochaConnectionReasonOK (no error)</code></pre></td>
<td>0</td>
</tr>
<tr class="even">
<td><pre><code>VivochaConnectionReasonTimeout</code></pre></td>
<td>1</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaConnectionReasonError</code></pre></td>
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
<td><pre><code>VivochaChatPresenceTypeOnline</code></pre></td>
<td>1</td>
</tr>
<tr class="even">
<td><pre><code>VivochaChatPresenceTypeGone</code></pre></td>
<td>2</td>
</tr>
<tr class="odd">
<td><pre><code>VivochaChatPresenceTypeTransfer - FOR FUTURE USE</code></pre></td>
<td>3</td>
</tr>
</tbody>
</table>

 

 

 
