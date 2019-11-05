1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [iOS](iOS_5079111.html)
4.  [iOS SDK Reference](iOS-SDK-Reference_1048693.html)

<span id="title-text"> Vivocha : VivochaDataCollection - iOS </span>
====================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Mar 11, 2015

 

-   [VivochaDataCollection
    Class](#VivochaDataCollection-iOS-VivochaDataCollectionClass)
    -   [Class Methods](#VivochaDataCollection-iOS-ClassMethods)
        -   [+ (VivochaDataCollection
            \*)dataCollectionWithForms:(NSArray
            \*)formsArray](#VivochaDataCollection-iOS-+(VivochaDataCollection*)dataCollectionWithForms:(NSArray*)formsArray)
    -   [Instance Methods](#VivochaDataCollection-iOS-InstanceMethods)
        -   [- (void)addForm:(VivochaDataCollectionForm
            \*)aForm](#VivochaDataCollection-iOS--(void)addForm:(VivochaDataCollectionForm*)aForm)
-   [VivochaDataCollectionForm
    Class](#VivochaDataCollection-iOS-VivochaDataCollectionFormClass)
    -   [Class Methods](#VivochaDataCollection-iOS-ClassMethods.1)
        -   [+ (VivochaDataCollectionForm
            \*)dataCollectionFormWithName:(NSString \*)name
            andDescription:(NSString
            \*)description](#VivochaDataCollection-iOS-+(VivochaDataCollectionForm*)dataCollectionFormWithName:(NSString*)nameandDescription:(NSString*)description)
    -   [Instance Methods](#VivochaDataCollection-iOS-InstanceMethods.1)
        -   [- (void)addField:(VivochaDataCollectionField
            \*)field](#VivochaDataCollection-iOS--(void)addField:(VivochaDataCollectionField*)field)
        -   [- (id)initWithName:(NSString \*)name
            andDescription:(NSString
            \*)description](#VivochaDataCollection-iOS--(id)initWithName:(NSString*)nameandDescription:(NSString*)description)
-   [VivochaDataCollectionField
    Class](#VivochaDataCollection-iOS-VivochaDataCollectionFieldClass)
    -   [Class Methods](#VivochaDataCollection-iOS-ClassMethods.2)
        -   [+ (VivochaDataCollectionField \*)fieldWithName:(NSString
            \*)name andType:(VivochaDataCollectionFieldType)type
            andValue:(NSString \*)value andDescription:(NSString \*)desc
            andIsVisibile:(BOOL)visibile
            andIsChecked:(BOOL)checked](#VivochaDataCollection-iOS-+(VivochaDataCollectionField*)fieldWithName:(NSString*)nameandType:(VivochaDataCollectionFieldType)typeandValue:(NSString*)valueandDescription:(NSString*)descandIsVisibile:(BOOL)visibileandIsChecked:(BOOL)checked)
    -   [Instance Methods](#VivochaDataCollection-iOS-InstanceMethods.2)
        -   [- (id)initWithName:(NSString \*)name
            andType:(VivochaDataCollectionFieldType)type
            andValue:(NSString \*)value andDescription:(NSString \*)desc
            andIsVisibile:(BOOL)visibile
            andIsChecked:(BOOL)checked](#VivochaDataCollection-iOS--(id)initWithName:(NSString*)nameandType:(VivochaDataCollectionFieldType)typeandValue:(NSString*)valueandDescription:(NSString*)descandIsVisibile:(BOOL)visibileandIsChecked:(BOOL)checked)

  

**  
**

VivochaDataCollection Class
===========================

**Class Methods**
-----------------

### + (VivochaDataCollection \*)dataCollectionWithForms:(NSArray \*)formsArray

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
<td><pre class="p2"><code>+ (VivochaDataCollection *)dataCollectionWithForms:(NSArray *)formsArray</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Factory method that returns a VivochaDataCollection object.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>formsArray - the forms that will be included in the data collection.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>the data collection.</code></pre></td>
</tr>
</tbody>
</table>

 

****Instance Methods****
------------------------

### - (void)addForm:(VivochaDataCollectionForm \*)aForm

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
<td><pre class="p2"><code>- (void)addForm:(VivochaDataCollectionForm *)aForm</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Adds a form in a data collection</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>aForm - the form that will be added to the data collection.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

VivochaDataCollectionForm Class
===============================

**Class Methods**
-----------------

### + (VivochaDataCollectionForm \*)dataCollectionFormWithName:(NSString \*)name andDescription:(NSString \*)description

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>+ (VivochaDataCollectionForm <span class="kw">*</span>)dataCollectionFormWithName:(NSString <span class="kw">*</span>)name andDescription:(NSString <span class="kw">*</span>)description</span></code></pre></div></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Factory method for a VivochaDataCollectionForm object.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><p><span class="s1">name - the form name</span></p></td>
</tr>
<tr class="even">
<td><span>description - the form <span>description</span></span></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>the form object.</code></pre></td>
</tr>
</tbody>
</table>

****Instance Methods****
------------------------

### - (void)addField:(VivochaDataCollectionField \*)field

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
<td><pre class="p2"><code>- (void)addField:(VivochaDataCollectionField *)field</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Adds a field in a form.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>field - the field that will be added to the form.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

 

### - (id)initWithName:(NSString \*)name andDescription:(NSString \*)description

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
<td><pre class="p2"><code>- (id)initWithName:(NSString *)name andDescription:(NSString *)description</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Initializes a VivochaDataCollectionForm object</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>name - the form name</code></pre></td>
</tr>
<tr class="even">
<td>description - the form description</td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>the initialized form object.</code></pre></td>
</tr>
</tbody>
</table>

 

 

<span style="font-size: 24.0px;line-height: 1.25;">VivochaDataCollectionField Class</span>
==========================================================================================

**Class Methods**
-----------------

### + (VivochaDataCollectionField \*)fieldWithName:(NSString \*)name andType:(VivochaDataCollectionFieldType)type andValue:(NSString \*)value andDescription:(NSString \*)desc andIsVisibile:(BOOL)visibile andIsChecked:(BOOL)checked

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
<td><pre class="p2"><code>+ (VivochaDataCollectionField *)fieldWithName:(NSString *)name andType:(VivochaDataCollectionFieldType)type andValue:(NSString *)value andDescription:(NSString *)desc andIsVisibile:(BOOL)visibile andIsChecked:(BOOL)checked</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Factory method for a VivochaDataCollectionField object.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre class="p3"><code>name - the field name</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>type - the field type</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>value - the field value</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>desc - the field description</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>visibile - the field visibility</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>checked - If the field type is a CheckBox, this parameter sets if the field is checked or not.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>the field object.</code></pre></td>
</tr>
</tbody>
</table>

``` p2
 
```

****Instance Methods****
------------------------

### - (id)initWithName:(NSString \*)name andType:(VivochaDataCollectionFieldType)type andValue:(NSString \*)value andDescription:(NSString \*)desc andIsVisibile:(BOOL)visibile andIsChecked:(BOOL)checked

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
<td><pre class="p2"><code>- (id)initWithName:(NSString *)name andType:(VivochaDataCollectionFieldType)type andValue:(NSString *)value andDescription:(NSString *)desc andIsVisibile:(BOOL)visibile andIsChecked:(BOOL)checked</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Initializes a VivochaDataCollectionField object.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre class="p3"><code>name - the field name</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>type - the field type</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>value - the field value</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>desc - the field description</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>visibile - the field visibility</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>checked - If the field type is a CheckBox, this parameter sets if the field is checked or not.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>the initialized field object.</code></pre></td>
</tr>
</tbody>
</table>

Document generated by Confluence on Oct 23, 2019 16:11

[Atlassian](http://www.atlassian.com/)
