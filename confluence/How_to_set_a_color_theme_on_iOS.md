# How to set a color theme on iOS

``` cpp
VivochaTheme *theme = [VivochaTheme new];
theme.chatTopViewBackgroundColor = [UIColor lightGreyColor];
 
[Vivocha setTheme:theme];
 
//Must be set up before the Vivocha Start method
[Vivocha startWithAccountID:@"MyAccountID" andServiceID:@"MyServiceID"];
```
