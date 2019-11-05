# VivochaMessage Class - iOS

# **VivochaMessage Class Reference**

 

-   [Properties](#VivochaMessageClass-iOS-Properties)
-   [Class Methods](#VivochaMessageClass-iOS-ClassMethods)
    -   [+ (VivochaMessage \*)messageWithText:(NSString \*)text
        andIsOutgoing:(BOOL)isOutgoing](#VivochaMessageClass-iOS-+(VivochaMessage*)messageWithText:(NSString*)textandIsOutgoing:(BOOL)isOutgoing)

  

**  
**

## **Properties**

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th>Type</th>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>BOOL</code></pre></td>
<td><pre><code>isOutgoing</code></pre></td>
<td><pre><code>If the message is sent from the current device, it returns YES. Otherwise it returns NO (e.g. a message from the agent).</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>NSString*</code></pre></td>
<td><pre><code>messageID</code></pre></td>
<td><pre><code>Unique message id.</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>NSString*</code></pre></td>
<td><pre><code>messageText</code></pre></td>
<td><pre><code>The text of the message.</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>NSString*</code></pre></td>
<td><pre><code>remotePeer</code></pre></td>
<td><pre><code>The remote peer address. (e.g. agentID@chat.vivocha.com in case of XMPP protocol)</code></pre></td>
</tr>
</tbody>
</table>

**  
**

## **Class Methods**

### + (VivochaMessage \*)messageWithText:(NSString \*)text andIsOutgoing:(BOOL)isOutgoing

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
<td><pre><code>+ (VivochaMessage *)messageWithText:(NSString *)text andIsOutgoing:(BOOL)isOutgoing</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Factory method to instantiate a VivochaMessage object.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>text - the message text</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>isOutgoing - YES if it is an outgoing message, NO if it is incoming.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>the VivochaMessage object.</code></pre></td>
</tr>
</tbody>
</table>
