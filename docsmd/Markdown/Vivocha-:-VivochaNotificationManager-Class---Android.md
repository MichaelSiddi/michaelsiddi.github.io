1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [Android](Android_5079113.html)
4.  [Android SDK Reference](Android-SDK-Reference_1048613.html)

<span id="title-text"> Vivocha : VivochaNotificationManager Class - Android </span>
===================================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Jul 10, 2014

**VivochaNotificationManager Class Reference**
==============================================

 

-   [Instance
    Methods](#VivochaNotificationManagerClass-Android-InstanceMethods)
    -   [void register(String senderID, VivochaNotificationManagerCallbacks cb, boolean showPlayServicesPopup)](#VivochaNotificationManagerClass-Android-voidregister(StringsenderID,VivochaNotificationManagerCallbackscb,booleanshowPlayServicesPopup))

  

 

**Instance Methods**
--------------------

### <span class="s1">void</span><span class="s2"> </span>register<span class="s2">(</span>String<span class="s2"> </span><span class="s3">senderID</span><span class="s4">,</span><span class="s2"> </span>VivochaNotificationManagerCallbacks<span class="s2"> </span><span class="s3">cb</span><span class="s4">,</span><span class="s2"> </span><span class="s1">boolean</span><span class="s2"> </span><span class="s3">showPlayServicesPopup</span><span class="s2">)</span>

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
<td><pre class="p1"><code>void register(String senderID, VivochaNotificationManagerCallbacks cb, boolean showPlayServicesPopup)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>Utility method that takes care of all the procedure to get a RegistrationID from the Google Cloud Messaging service.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre class="p1"><code>senderID - the senderID Google gave to you in the Google Developer Console (a.k.a. Project Number)</code></pre></td>
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

Document generated by Confluence on Oct 23, 2019 16:12

[Atlassian](http://www.atlassian.com/)