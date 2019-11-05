1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [iOS](iOS_5079111.html)
4.  [iOS SDK Reference](iOS-SDK-Reference_1048693.html)

<span id="title-text"> Vivocha : VivochaContact Class - iOS </span>
===================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Jul 10, 2014

**VivochaContact Class Reference**
==================================

 

-   [Instance Methods](#VivochaContactClass-iOS-InstanceMethods)
    -   [- (void)connect](#VivochaContactClass-iOS--(void)connect)
    -   [-
        (void)sendBackground](#VivochaContactClass-iOS--(void)sendBackground)
    -   [-
        (void)sendChatState:(BOOL)isTyping](#VivochaContactClass-iOS--(void)sendChatState:(BOOL)isTyping)
    -   [- (void)sendCustomAction:(VivochaCustomAction
        \*)action](#VivochaContactClass-iOS--(void)sendCustomAction:(VivochaCustomAction*)action)
    -   [- (void)sendTextMessage:(VivochaMessage
        \*)message](#VivochaContactClass-iOS--(void)sendTextMessage:(VivochaMessage*)message)
    -   [-
        (void)showView:(BOOL)animated](#VivochaContactClass-iOS--(void)showView:(BOOL)animated)
    -   [-
        (void)hideView:(BOOL)animated](#VivochaContactClass-iOS--(void)hideView:(BOOL)animated)
    -   [- (void)terminate](#VivochaContactClass-iOS--(void)terminate)
    -   [-
        (void)terminateHidingView:(BOOL)hide](#VivochaContactClass-iOS--(void)terminateHidingView:(BOOL)hide)
    -   [- (VivochaAgent
        \*)agent](#VivochaContactClass-iOS--(VivochaAgent*)agent)

  

 

**Instance Methods**
--------------------

### <span style="line-height: 1.5625;">- (void)connect</span>

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre class="p2"><code>- (void)connect</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Creates and connects the communication stream.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

``` p2
 
```

### - (void)sendBackground

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre class="p2"><code>- (void)sendBackground</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Sends a background notification to the server in order to enable the push notifications.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

``` p2
 
```

### - (void)sendChatState:(BOOL)isTyping

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre class="p2"><code>- (void)sendChatState:(BOOL)isTyping</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Sends a ‘composing’/‘paused’ message through the communication stream.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>isTyping - If YES the message will be ‘composing’, otherwise it will be ‘paused’.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

 

### - (void)sendCustomAction:(VivochaCustomAction \*)action

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre class="p2"><code>- (void)sendCustomAction:(VivochaCustomAction *)action</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Sends a custom action to the agent desktop through the communication stream.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>action - the custom action.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

 

### - (void)sendTextMessage:(VivochaMessage \*)message

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre class="p2"><code>- (void)sendTextMessage:(VivochaMessage *)message</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Sends a VivochaMessage through the communication stream.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>message - the message.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

 

### - (void)showView:(BOOL)animated

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre class="p2"><code>- (void)showView:(BOOL)animated</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Shows the chat view.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>animated - YES if you want an animation, NO otherwise.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

 

### - (void)hideView:(BOOL)animated

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre class="p2"><code>- (void)hideView:(BOOL)animated</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Hides the chat view.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>animated - YES if you want an animation, NO otherwise</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

``` p2
 
```

### - (void)terminate

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre class="p3"><code>- (void)terminate</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Terminates a contact, hides the chat view and disconnects the communication stream.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

``` p3
 
```

### - (void)terminateHidingView:(BOOL)hide

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre class="p2"><code>- (void)terminateHidingView:(BOOL)hide</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Terminates a contact, disconnects the communication stream and if the passed parameter is YES, hides the chat view.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>hide - YES to hide the chat, NO to keep it open.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

 

### - (VivochaAgent \*)agent

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Method Name</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre class="p2"><code>- (VivochaAgent *)agent</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>If an agent accepts the contact, this method will return an object containing the name and the avatar (if present) of the current agent.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>the agent.</code></pre></td>
</tr>
</tbody>
</table>

Document generated by Confluence on Oct 23, 2019 16:11

[Atlassian](http://www.atlassian.com/)
