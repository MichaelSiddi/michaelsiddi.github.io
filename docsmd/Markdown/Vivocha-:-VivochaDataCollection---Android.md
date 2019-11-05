1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [Android](Android_5079113.html)
4.  [Android SDK Reference](Android-SDK-Reference_1048613.html)

<span id="title-text"> Vivocha : VivochaDataCollection - Android </span>
========================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Jul 10, 2014

-   [VivochaDataCollection
    Class](#VivochaDataCollection-Android-VivochaDataCollectionClass)
    -   [Class Methods](#VivochaDataCollection-Android-ClassMethods)
        -   [VivochaDataCollection(ArrayList\<VivochaDataCollectionField\> forms)](#VivochaDataCollection-Android-VivochaDataCollection(ArrayList%3CVivochaDataCollectionField%3Eforms))
        -   [VivochaDataCollection()](#VivochaDataCollection-Android-VivochaDataCollection())
    -   [Instance
        Methods](#VivochaDataCollection-Android-InstanceMethods)
        -   [void addForm(VivochaDataCollectionForm form)](#VivochaDataCollection-Android-voidaddForm(VivochaDataCollectionFormform))
-   [VivochaDataCollectionForm
    Class](#VivochaDataCollection-Android-VivochaDataCollectionFormClass)
    -   [Class Methods](#VivochaDataCollection-Android-ClassMethods.1)
        -   [VivochaDataCollectionForm(ArrayList\<VivochaDataCollectionField\> fields)](#VivochaDataCollection-Android-VivochaDataCollectionForm(ArrayList%3CVivochaDataCollectionField%3Efields))
        -   [VivochaDataCollectionForm()](#VivochaDataCollection-Android-VivochaDataCollectionForm())
    -   [Instance
        Methods](#VivochaDataCollection-Android-InstanceMethods.1)
        -   [void addField(VivochaDataCollectionField
            field)](#VivochaDataCollection-Android-voidaddField(VivochaDataCollectionFieldfield))
-   [VivochaDataCollectionField
    Class](#VivochaDataCollection-Android-VivochaDataCollectionFieldClass)
    -   [Class Methods](#VivochaDataCollection-Android-ClassMethods.2)
        -   [VivochaDataCollectionField(String name, String type, String value, String description, boolean visible, boolean checked)](#VivochaDataCollection-Android-VivochaDataCollectionField(Stringname,Stringtype,Stringvalue,Stringdescription,booleanvisible,booleanchecked))

  

**  
**

VivochaDataCollection Class
===========================

**Class Methods**
-----------------

### **VivochaDataCollection<span class="s1">(</span>ArrayList<span class="s2">\<</span><span class="s3">VivochaDataCollectionField</span><span class="s2">\></span><span class="s1"> </span><span class="s3">forms</span><span class="s1">)</span>**

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
<td><pre class="p1"><code>VivochaDataCollection(ArrayList&lt;VivochaDataCollectionField&gt; forms)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Constructor for a VivochaDataCollection object</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>forms - the forms that will be included in the data collection.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>the data collection.</code></pre></td>
</tr>
</tbody>
</table>

### **VivochaDataCollection<span class="s1">(</span><span class="s1">)</span>**

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
<td><pre class="p1"><code>VivochaDataCollection(ArrayList&lt;VivochaDataCollectionField&gt; forms)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Constructor for a VivochaDataCollection object</code></pre></td>
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
<td><pre><code>the data collection.</code></pre></td>
</tr>
</tbody>
</table>

****Instance Methods****
------------------------

### void addForm(VivochaDataCollectionForm form)

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
<td><pre class="p1"><code>void addForm(VivochaDataCollectionForm form)</code></pre></td>
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
<td><pre><code>form - the form that will be added to the data collection.</code></pre></td>
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

### **VivochaDataCollectionForm<span class="s1">(</span>ArrayList<span class="s2">\<</span><span class="s3">VivochaDataCollectionField</span><span class="s2">\></span><span class="s1"> </span><span class="s3">fields</span><span class="s1">)</span>**

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
<td><pre class="p1"><code>VivochaDataCollectionForm(ArrayList&lt;VivochaDataCollectionField&gt; fields)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Constructor for a VivochaDataCollection object</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>fields - the fields that will be included in the form.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>the data collection form.</code></pre></td>
</tr>
</tbody>
</table>

### **VivochaDataCollectionForm<span class="s1">(</span><span class="s1">)</span>**

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
<td><pre class="p1"><code>VivochaDataCollectionForm(ArrayList&lt;VivochaDataCollectionField&gt; fields)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Constructor for a VivochaDataCollection object</code></pre></td>
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
<td><pre><code>the data collection form.</code></pre></td>
</tr>
</tbody>
</table>

****Instance Methods****
------------------------

### void addField(VivochaDataCollectionField field)

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
<td><pre class="p1"><code>void addField(VivochaDataCollectionField field)</code></pre></td>
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

 

<span style="font-size: 24.0px;line-height: 1.25;">VivochaDataCollectionField Class</span>
==========================================================================================

**Class Methods**
-----------------

### VivochaDataCollectionField<span class="s1">(</span>String<span class="s1"> </span><span class="s2">name</span><span class="s3">,</span><span class="s1"> </span>String<span class="s1"> </span><span class="s2">type</span><span class="s3">,</span><span class="s1"> </span>String<span class="s1"> </span><span class="s2">value</span><span class="s3">,</span><span class="s1"> </span>String<span class="s1"> </span><span class="s2">description</span><span class="s3">,</span><span class="s1"> </span><span class="s4">boolean</span><span class="s1"> </span><span class="s2">visible</span><span class="s3">,</span><span class="s1"> </span><span class="s4">boolean</span><span class="s1"> </span><span class="s2">checked</span><span class="s1">)</span>

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
<td><pre class="p1"><code>VivochaDataCollectionField(String name, String type, String value, String description, boolean visible, boolean checked)</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Constructor for a VivochaDataCollectionField object.</code></pre></td>
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
<td><pre><code>visible - the field visibility</code></pre></td>
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

Document generated by Confluence on Oct 23, 2019 16:12

[Atlassian](http://www.atlassian.com/)
