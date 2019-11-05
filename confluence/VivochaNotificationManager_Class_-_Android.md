# VivochaNotificationManager Class - Android

# **VivochaNotificationManager Class Reference**

 

-   [Instance
    Methods](#VivochaNotificationManagerClass-Android-InstanceMethods)
    -   [void register(String senderID, VivochaNotificationManagerCallbacks cb, boolean showPlayServicesPopup)](#VivochaNotificationManagerClass-Android-voidregister(StringsenderID,VivochaNotificationManagerCallbackscb,booleanshowPlayServicesPopup))

  

 

## **Instance Methods**

### void register(String senderID, VivochaNotificationManagerCallbacks cb, boolean showPlayServicesPopup)

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
<td><pre><code>void register(String senderID, VivochaNotificationManagerCallbacks cb, boolean showPlayServicesPopup)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Utility method that takes care of all the procedure to get a RegistrationID from the Google Cloud Messaging service.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>senderID - the senderID Google gave to you in the Google Developer Console (a.k.a. Project Number)</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>cb - the VivochaNotificationManagerCallbacks callback that will be fired when the GCM returns a RegistrationID or when the registration fails</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>showPlayServicesPopup - if set to true, when a user with an Android phone that doesn&#39;t have the Google Play Services installed runs your application, an invitation to install them will be shown.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>
