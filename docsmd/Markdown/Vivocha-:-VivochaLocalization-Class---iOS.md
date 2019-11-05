1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [iOS](iOS_5079111.html)
4.  [iOS SDK Reference](iOS-SDK-Reference_1048693.html)

<span id="title-text"> Vivocha : VivochaLocalization Class - iOS </span>
========================================================================

Created by <span class="author"> Michael Siddi</span>, last modified on
Mar 11, 2015

**VivochaLocalization Class Reference**
=======================================

**  
**

-   [Class Methods](#VivochaLocalizationClass-iOS-ClassMethods)
    -   [+ (VivochaLocalization \*)localizationWithLanguage:(NSString
        \*)lang](#VivochaLocalizationClass-iOS-+(VivochaLocalization*)localizationWithLanguage:(NSString*)lang)
-   [Instance Methods](#VivochaLocalizationClass-iOS-InstanceMethods)
    -   [- (void) setTranslation:(NSString \*)translation
        forKey:(NSString
        \*)key](#VivochaLocalizationClass-iOS--(void)setTranslation:(NSString*)translationforKey:(NSString*)key)
    -   [- (NSString \*) getTranslationForKey:(NSString
        \*)key](#VivochaLocalizationClass-iOS--(NSString*)getTranslationForKey:(NSString*)key)
    -   [- (NSArray \*)
        translatedKeys](#VivochaLocalizationClass-iOS--(NSArray*)translatedKeys)

  

**  
**

**Class Methods**
-----------------

### + (VivochaLocalization \*)localizationWithLanguage:(NSString \*)lang

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
<td><pre class="p4"><code>+ (VivochaLocalization *)localizationWithLanguage:(NSString *)lang</code></pre></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Factory method that creates a VivochaLocalization object.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>lang - the language (e.g. &#39;it&#39;)</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>the VivochaLocalization object.</code></pre></td>
</tr>
</tbody>
</table>

****Instance Methods****
------------------------

### - (void) setTranslation:(NSString \*)translation forKey:(NSString \*)key

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>- (void) setTranslation:(NSString <span class="kw">*</span>)translation forKey:(NSString <span class="kw">*</span>)key</span></code></pre></div></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Adds a translation for a given key.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>translation - the translation.</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>key - the key to be translated.</code></pre></td>
</tr>
<tr class="odd">
<td>Return Value</td>
</tr>
<tr class="even">
<td><pre><code>-</code></pre></td>
</tr>
</tbody>
</table>

### - (NSString \*) getTranslationForKey:(NSString \*)key

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>- (NSString <span class="kw">*</span>) getTranslationForKey:(NSString <span class="kw">*</span>)key</span></code></pre></div></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Returns, if set, the translation for a given key.</code></pre></td>
</tr>
<tr class="even">
<td>Parameters</td>
</tr>
<tr class="odd">
<td><pre><code>key - the translation key.</code></pre></td>
</tr>
<tr class="even">
<td>Return Value</td>
</tr>
<tr class="odd">
<td><pre><code>a NSString with the translation.</code></pre></td>
</tr>
</tbody>
</table>

### - (NSArray \*) translatedKeys

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
<td><div class="sourceCode" id="cb1"><pre class="sourceCode p6"><code class="sourceCode perl"><span id="cb1-1"><a href="#cb1-1"></a>- (NSArray <span class="kw">*</span>) translatedKeys</span></code></pre></div></td>
</tr>
<tr class="even">
<td>Description</td>
</tr>
<tr class="odd">
<td><pre class="p2"><code>Returns an array with all the translated keys.</code></pre></td>
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
<td><pre><code>A collection with all the keys that were translated.</code></pre></td>
</tr>
</tbody>
</table>

Document generated by Confluence on Oct 23, 2019 16:11

[Atlassian](http://www.atlassian.com/)