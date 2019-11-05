# VivochaMessage Class - Android

# **VivochaMessage Class Reference**

 

-   [Properties](#VivochaMessageClass-Android-Properties)
-   [Class Methods](#VivochaMessageClass-Android-ClassMethods)
    -   [VivochaMessage(java.lang.String text, java.util.Date date,
        boolean
        isOutgoing)](#VivochaMessageClass-Android-VivochaMessage(java.lang.Stringtext,java.util.Datedate,booleanisOutgoing))

  

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
<td><pre><code>boolean</code></pre></td>
<td><pre><code>isOutgoing</code></pre></td>
<td><pre><code>If the message is sent from the current device, it returns true. Otherwise it returns false (e.g. a message from the agent).</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>String</code></pre></td>
<td><pre><code>packetID</code></pre></td>
<td><pre><code>Unique message id.</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>String</code></pre></td>
<td><pre><code>messageText</code></pre></td>
<td><pre><code>The text of the message.</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>String</code></pre></td>
<td><pre><code>remotePeer</code></pre></td>
<td><pre><code>The remote peer address. (e.g. agentID@chat.vivocha.com in case of XMPP protocol)</code></pre></td>
</tr>
</tbody>
</table>

**  
**

## **Class Methods**

### VivochaMessage(java.lang.String text, java.util.Date date, boolean isOutgoing)

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
<td><pre><code>VivochaMessage(java.lang.String text, java.util.Date date, boolean isOutgoing)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Constructor for a VivochaMessage.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>text - the message text</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>date - the message timestamp</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>isOutgoing - YES if it is an outgoing message, NO if it is incoming.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>the VivochaMessage object.</code></pre></td>
</tr>
</tbody>
</table>
