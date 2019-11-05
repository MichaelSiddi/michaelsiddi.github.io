1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [Android](Android_5079113.html)
4.  [Android How To Collection](5079103.html)

<span id="title-text"> Vivocha : How to create a weblead on Android </span>
===========================================================================

Created by <span class="author"> Michael Siddi</span> on Mar 11, 2015

``` syntaxhighlighter-pre
Vivocha.createWeblead(Vivocha.getDataCollection(), "email@example.com", new VivochaContactCreationCallback() {


    @Override
    public void onCreationSuccess(VivochaContact contact) {
        //WebLead created!
    }


    @Override
    public void onCreationFailure() {
        //There was an error creating the weblead!
    }

});
```

Document generated by Confluence on Oct 23, 2019 16:12

[Atlassian](http://www.atlassian.com/)