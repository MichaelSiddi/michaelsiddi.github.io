# iOS SDK Reference

# Vivocha iOS SDK Reference

This is the Vivocha iOS SDK API Reference. All the public APIs are
described here.

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Description</th>
<th>Link</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Vivocha</td>
<td>This is the main class and main entry point of the Vivocha SDK. It lives as a singleton for the entire lifetime of your app.</td>
<td><p>Vivocha Class</p></td>
</tr>
<tr class="even">
<td>VivochaContact</td>
<td>This class takes care of the all the life cycle of a contact between your customer and your agent and provides all the methods you need to create your own custom chat view.</td>
<td><p>VivochaContact Class</p></td>
</tr>
<tr class="odd">
<td>VivochaCustomAction</td>
<td>This is an utility class that permits you to send/receive custom action from/to the Agent Desktop.</td>
<td><p>VivochaCustomAction Class</p></td>
</tr>
<tr class="even">
<td>VivochaDataCollection</td>
<td>This class provides you all the methods to easily compose a DataCollection object with multiple forms and fields.</td>
<td><p>VivochaDataCollection - VivochaDataCollectionForm - VivochaDataCollectionField Classes</p></td>
</tr>
<tr class="odd">
<td>VivochaLocalization</td>
<td>This class permits you to change all the strings used by the Vivocha SDK.</td>
<td><strong><a href="VivochaLocalization_Class_-_iOS">VivochaLocalization Class</a></strong></td>
</tr>
<tr class="even">
<td>VivochaMessage</td>
<td>This class is useful when you are creating your own chat view because it provides all the information you need to represent a chat message.</td>
<td><p>VivochaMessage Class</p></td>
</tr>
<tr class="odd">
<td>VivochaNotification</td>
<td><p>This class is a container for a payload (e.g. an NSDictionary) and an error (NSError) that will be attached to a NSNotification object.</p>
<p>Almost every NSNotification object the Vivocha SDK sends contains a VivochaNotification object.</p></td>
<td><p>VivochaNotification Class and NSNotification(VivochaNotificationAddons) Category</p></td>
</tr>
<tr class="even">
<td>VivochaTheme</td>
<td>This class is used to setup a color theme for the Engagement and Interaction UI.</td>
<td><strong><a href="VivochaTheme_Class_-_iOS">VivochaTheme Class</a></strong></td>
</tr>
<tr class="odd">
<td>VivochaSDK Values</td>
<td>All the public values and strings used by the Vivocha SDK.</td>
<td><p>VivochaSDK Values</p></td>
</tr>
</tbody>
</table>
