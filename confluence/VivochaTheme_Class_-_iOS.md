# VivochaTheme Class - iOS

# **VivochaTheme Class Reference**

  

-   [Properties](#VivochaThemeClass-iOS-Properties)

  

**  
**

## **Properties**

Type

Name

Description

**Engagement**

    UIColor*

    sideButtonBackgroundColor

Side Tab Background Color 

    UIColor*

    sideButtonTextColor

Side Tab Text Color

    VivochaPositionSide

    sideButtonSide

Side Tab position side (Left, Right, Up, Down)

    VivochaPosition

    sideButtonPosition

Side Tab position in the side (Top, Middle, Bottom)

**Chat View UI**

    UIColor*

    chatBackgroundColor

The background color for the chat view section where the message baloons
will appear

    UIImage*

    chatBackgroundImage

The background image for the chat view section where the message baloons
will appear

    CGFloat

    chatBubbleCornerRadius

Message baloon corner radius

    UIColor*

    chatBubbleOutgoingColor

Message baloon background color for the messages sent by the customer
(right side of the chat)

    UIColor*

    chatBubbleOutgoingTextColor

Message baloon text color for the messages sent by the customer (right
side of the chat)

    UIColor*

    chatBubbleIncomingColor

Message baloon background color for the messages sent by the agent (left
side of the chat)

    UIColor*

    chatBubbleIncomingTextColor

Message baloon text color for the messages sent by the agent (left side
of the chat)

    UIColor*

    chatStatusTextColor

Text color for Status messages (e.g. "Agent Mike is Online")

    UIColor*

    chatSendButtonBackgroundColor

Send button background color

    UIColor*

    chatSendButtonTextColor

Send button text color

    UIColor*

    chatInputViewBackgroundColor

Background color for the input area (that's where the Send button and
the Text Area are attached)

    UIColor*

    chatInputViewTextColor

Text color for the Text Area

    UIColor*

    chatTopViewBackgroundColor

Background color for the chat top view (that's where the Minimize and
End button are placed)

    UIColor*

    chatTopViewButtonTextColor

Text color for the button texts in the chat top view (that's where the
Minimize and End button are placed)

  

  

  

**How to set a theme**

``` cpp
VivochaTheme *theme = [VivochaTheme new];
theme.chatTopViewBackgroundColor = [UIColor lightGreyColor];
 
[Vivocha setTheme:theme];
 
[Vivocha startWithAccountID:@"MyAccountID" andServiceID:@"MyServiceID"];
```
