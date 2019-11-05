1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [iOS](iOS_5079111.html)
4.  [Android How To Collection](5079105.html)

<span id="title-text"> Vivocha : How to create a weblead on iOS </span>
=======================================================================

Created by <span class="author"> Michael Siddi</span> on Apr 20, 2015

``` syntaxhighlighter-pre
[Vivocha createWebLeadWithDataCollection:[Vivocha getDataCollection] andEmail:@"email@example.com" andCompletionBlock:^(VivochaContact *contact) {
    if(contact){
        //WebLead created!
    }
    else{
        //There was an error creating the weblead!
    }
}];
```

Document generated by Confluence on Oct 23, 2019 16:11

[Atlassian](http://www.atlassian.com/)