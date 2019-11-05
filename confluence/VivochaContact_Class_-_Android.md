# VivochaContact Class - Android

# **VivochaContact Class Reference**

 

-   [Instance Methods](#VivochaContactClass-Android-InstanceMethods)
    -   [void
        setContactEventCallbacks(VivochaContact.VivochaContactEventCallbacks
        callbacks)](#VivochaContactClass-Android-voidsetContactEventCallbacks(VivochaContact.VivochaContactEventCallbackscallbacks))
    -   [void
        setConnectionStateCallbacks(VivochaContact.VivochaContactConnectionStateCallbacks
        callbacks)](#VivochaContactClass-Android-voidsetConnectionStateCallbacks(VivochaContact.VivochaContactConnectionStateCallbackscallbacks))
    -   [void connect()](#VivochaContactClass-Android-voidconnect())
    -   [void reconnect()](#VivochaContactClass-Android-voidreconnect())
    -   [void terminate()](#VivochaContactClass-Android-voidterminate())
    -   [void terminate(boolean
        hideView)](#VivochaContactClass-Android-voidterminate(booleanhideView))
    -   [void
        destroyConnection()](#VivochaContactClass-Android-voiddestroyConnection())
    -   [void showView(boolean
        animated)](#VivochaContactClass-Android-voidshowView(booleananimated))
    -   [void hideView(boolean
        animated)](#VivochaContactClass-Android-voidhideView(booleananimated))
    -   [void
        sendBackground()](#VivochaContactClass-Android-voidsendBackground())
    -   [void sendMessage(VivochaMessage
        message)](#VivochaContactClass-Android-voidsendMessage(VivochaMessagemessage))
    -   [void sendChatState(boolean
        typing)](#VivochaContactClass-Android-voidsendChatState(booleantyping))
    -   [void sendAction(VivochaCustomAction
        action)](#VivochaContactClass-Android-voidsendAction(VivochaCustomActionaction))
    -   [void sendEvent(com.vivocha.sdk.model.VivochaEvent
        event)](#VivochaContactClass-Android-voidsendEvent(com.vivocha.sdk.model.VivochaEventevent))
    -   [boolean
        isAuthenticated()](#VivochaContactClass-Android-booleanisAuthenticated())
    -   [boolean
        isConnected()](#VivochaContactClass-Android-booleanisConnected())
    -   [boolean
        isConnectedAndAuthenticated()](#VivochaContactClass-Android-booleanisConnectedAndAuthenticated())
    -   [com.vivocha.sdk.model.VivochaAgent
        getAgent()](#VivochaContactClass-Android-com.vivocha.sdk.model.VivochaAgentgetAgent())

  

## ****Instance Methods****

### void setContactEventCallbacks(VivochaContact.VivochaContactEventCallbacks callbacks)

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
<td><pre><code>void setContactEventCallbacks(VivochaContact.VivochaContactEventCallbacks callbacks)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Sets the contact events callback that you may need to create your own chat view for a Vivocha Contact.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>callbacks - the callbacks that will be fired when there is a new event (e.g. a new chat message)</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### void setConnectionStateCallbacks(VivochaContact.VivochaContactConnectionStateCallbacks callbacks)

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
<td><pre><code>void setConnectionStateCallbacks(VivochaContact.VivochaContactConnectionStateCallbacks callbacks)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Sets the connection callbacks that you may need to customize your app behavior during a Vivocha contact</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>callbacks - the callbacks that will be fired when the connection changes its status (e.g. the connection stream encountered a connection problem)</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### void connect()

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
<td><pre><code>void connect()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Creates and connects the communication stream</code></pre></td>
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

### void reconnect()

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
<td><pre><code>void reconnect()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Reconnects the communication stream</code></pre></td>
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

### void terminate()

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
<td><pre><code>void terminate()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Terminates a contact, hides the chat view and disconnects the communication stream.</code></pre></td>
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

### void terminate(boolean hideView)

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
<td><pre><code>void terminate(boolean hideView)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Terminates a contact and disconnects the communication stream.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>hideView - if true it hides the view.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### void destroyConnection()

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
<td><pre><code>void destroyConnection()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Destroys the connection stream.</code></pre></td>
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

### void showView(boolean animated)

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
<td><pre><code>void showView(boolean animated)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Shows the chat view for the current contact.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>animated - if true there will be an animation when starting the activity</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### void hideView(boolean animated)

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
<td><pre><code>void hideView(boolean animated)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Hides the chat view for the current contact.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>animated - if true there will be an animation when hiding the activity</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### void sendBackground()

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
<td><pre><code>void sendBackground()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Sends a background notification to the server in order to enable the push notifications.</code></pre></td>
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

### void sendMessage(VivochaMessage message)

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
<td><pre><code>void sendMessage(VivochaMessage message)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Sends a message through the connection stream.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>message - the message that will be sent</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### void sendChatState(boolean typing)

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
<td><pre><code>void sendChatState(boolean typing)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Sends a chat state through the connection stream.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>message - the message that will be sent</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### void sendAction(VivochaCustomAction action)

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
<td><pre><code>void sendAction(VivochaCustomAction action)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Sends a custom action to the agent desktop through the communication stream.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>action - the custom action</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### void sendEvent(com.vivocha.sdk.model.VivochaEvent event)

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
<td><pre><code>void sendEvent(com.vivocha.sdk.model.VivochaEvent event)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Sends an Event through the connection stream.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>event - the VivochaEvent object to be sent</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### boolean isAuthenticated()

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
<td><pre><code>boolean isAuthenticated()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Returns true if the connection stream is Authenticated</code></pre></td>
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
<td><pre><code>true if the connection stream is Authenticated</code></pre></td>
</tr>
</tbody>
</table>

### boolean isConnected()

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
<td><pre><code>boolean isConnected()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Returns true if the connection stream is Connected.</code></pre></td>
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
<td><pre><code>true if the connection stream is Connected</code></pre></td>
</tr>
</tbody>
</table>

### boolean isConnectedAndAuthenticated()

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
<td><pre><code>boolean isConnectedAndAuthenticated()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Returns true if the connection stream is Connected and Authenticated</code></pre></td>
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
<td><pre><code>true if the connection stream is Connected and Authenticated</code></pre></td>
</tr>
</tbody>
</table>

### com.vivocha.sdk.model.VivochaAgent getAgent()

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
<td><pre><code>com.vivocha.sdk.model.VivochaAgent getAgent()</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>If an agent accepts the contact, this method will return an object containing the name and the avatar (if present) of the current agent</code></pre></td>
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
<td><pre><code>the current Agent</code></pre></td>
</tr>
</tbody>
</table>

 

 
