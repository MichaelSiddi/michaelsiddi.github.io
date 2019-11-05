# VivochaNotification Class - iOS

 

-   [VivochaNotification
    Class](#VivochaNotificationClass-iOS-VivochaNotificationClass)
    -   [Class Methods](#VivochaNotificationClass-iOS-ClassMethods)
        -   [+ (void)postVivochaNotificationWithName:(NSString
            \*)in\_name andPayload:(id)in\_payload andError:(NSError
            \*)in\_error](#VivochaNotificationClass-iOS-+(void)postVivochaNotificationWithName:(NSString*)in_nameandPayload:(id)in_payloadandError:(NSError*)in_error)
        -   [+ (VivochaNotification
            \*)vivochaNotificationWithName:(NSString \*)name
            andPayload:(id)payload andError:(NSError
            \*)error](#VivochaNotificationClass-iOS-+(VivochaNotification*)vivochaNotificationWithName:(NSString*)nameandPayload:(id)payloadandError:(NSError*)error)
-   [NSNotification(VivochaNotificationAddons)
    Category ](#VivochaNotificationClass-iOS-NSNotification(VivochaNotificationAddons)Category)
    -   [Instance
        Methods](#VivochaNotificationClass-iOS-InstanceMethods)
        -   [- (VivochaNotification
            \*)vivochaNotification](#VivochaNotificationClass-iOS--(VivochaNotification*)vivochaNotification)

  

**  
**

# VivochaNotification Class

## **Class Methods**

### + (void)postVivochaNotificationWithName:(NSString \*)in\_name andPayload:(id)in\_payload andError:(NSError \*)in\_error

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
<td><pre><code>+ (void)postVivochaNotificationWithName:(NSString *)in_name andPayload:(id)in_payload andError:(NSError *)in_error</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Posts a VivochaNotification through the NSNotificationCenter’s default center</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>in_name - the notification name</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>in_payload - the notification payload</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>in_error - the notification payload in case of error</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

 

### + (VivochaNotification \*)vivochaNotificationWithName:(NSString \*)name andPayload:(id)payload andError:(NSError \*)error

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
<td><pre><code>+ (VivochaNotification *)vivochaNotificationWithName:(NSString *)name andPayload:(id)payload andError:(NSError *)error</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Factory method for a VivochaNotification</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>name - the notification name</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>payload - the notification payload</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>error - the notification payload in case of error</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>the notification.</code></pre></td>
</tr>
</tbody>
</table>

     

# NSNotification(VivochaNotificationAddons) Category 

 

## ****Instance Methods****

### - (VivochaNotification \*)vivochaNotification

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
<td><pre><code>- (VivochaNotification *)vivochaNotification</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre><code>Utility method to access directly to the VivochaNotification inside a NSNotification.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>actionName - the action name.</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>block - the action block.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>the VivochaNotification object, if present.</code></pre></td>
</tr>
</tbody>
</table>
