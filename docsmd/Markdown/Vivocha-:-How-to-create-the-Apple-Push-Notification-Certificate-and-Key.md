1.  [Vivocha](index.html)
2.  [Mobile Services](Mobile-Services_1048602.html)
3.  [iOS](iOS_5079111.html)
4.  [Android How To Collection](5079105.html)

<span id="title-text"> Vivocha : How to create the Apple Push Notification Certificate and Key </span>
======================================================================================================

Created by <span class="author"> Michael Siddi</span>, last modified by
<span class="editor"> Andrea Lovicu</span> on Feb 06, 2018

<span class="s1">**How to create the Apple Push Notification Certificate
and Key**</span>

<span class="s1">**  
**</span>In order to enable you Vivocha powered application to receive
push notifications from the agents you needs to configure your iOS
Service with the Apple Push Notification Certificate and Key.

  

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">  
</span>

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Log
in to the Apple Developer Portal (</span><span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><a href="https://developer.apple.com/account/overview.action" class="external-link">https://developer.apple.com/account/overview.action</a>)</span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048822/1344261.png?width=300" class="confluence-embedded-image confluence-thumbnail" width="300" /></span></span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"> </span>

<span class="s2">Click on the Certificates section.</span>

<span
class="confluence-embedded-file-wrapper"><img src="assets/images/1048822/1344241.png" class="confluence-embedded-image" /></span>

Select the Production.

<span
class="confluence-embedded-file-wrapper"><img src="assets/images/1048822/1344236.png" class="confluence-embedded-image" /></span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Press
the + button.</span>

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048822/1344239.png?width=500" class="confluence-embedded-image" width="500" /></span>

Select Apple Push Notification service SSL (Production) and press
Continue.

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048822/1344237.png?width=500" class="confluence-embedded-image" width="500" /></span></span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Select
your APP ID from the list and continue.</span>

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048822/1344260.png?width=500" class="confluence-embedded-image" width="500" /></span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Follow
the instructions Apple gives you.</span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048822/1344267.png?width=500" class="confluence-embedded-image" width="500" /></span></span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">  
</span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048822/1344266.png?width=500" class="confluence-embedded-image" width="500" /></span></span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Download
the certificate, locate it in your file system and double click on
it.</span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="confluence-embedded-file-wrapper"><img src="assets/images/1048822/1344265.png" class="confluence-embedded-image" /></span></span>

Open the Keychain Access app and go to the Certificates category.

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="confluence-embedded-file-wrapper"><img src="assets/images/1048822/1344264.png" class="confluence-embedded-image" /></span></span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Locate
the Apple Production iOS Push Services' certificate and expand it - you
will find your private key.</span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="confluence-embedded-file-wrapper"><img src="assets/images/1048822/1344252.png" class="confluence-embedded-image" /></span></span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Right
click on the certificate row and choose Export "Apple Production iOS
Push Services: com.yourname.yourappname"</span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048822/1344253.png?width=300" class="confluence-embedded-image confluence-thumbnail" width="300" /></span></span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">When
a password request is prompted do not enter any password and press
OK.</span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;"><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/1048822/1344254.png?width=500" class="confluence-embedded-image" width="500" /></span></span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Do
the same steps with you private key. (Export it in the same folder of
your certificate)</span>

  

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Open
a Terminal window and go to the folder where you saved the certificate
and key.</span>

<span class="s2"
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">Run
the following commands:</span>

<span
class="confluence-embedded-file-wrapper"><img src="assets/images/1048822/1344255.png" class="confluence-embedded-image" /></span>

**openssl pkcs12 -in YOURCERTIFICATEFILENAME -out cert.pem -clcerts
-nokeys**

<span
class="confluence-embedded-file-wrapper"><img src="assets/images/1048822/1344256.png" class="confluence-embedded-image" /></span>

<span class="s1">**openssl pkcs12 -in YOURKEYFILENAME -nocerts -nodes \|
openssl rsa -out key.pem**</span>

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">By
running these two commands you will produce two files
named: </span>**cert.pem**<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">
and </span>**key.pem**

Now we need to encode these two files in Base64:

** openssl base64 -in cert.pem -out cert.txt**

** openssl base64 -in key.pem -out key.txt  
  
**Open the ***key.txt*** file with a text editor ed it should appear
similar to the following text: 

> *QmFnIEF0dHJpYnV0Z*zBka3FxCkRXQ1BFRmpqqmljaFFRSmRjOXg0c0JaOTY1alMz*  
> *b1hKa3RaR09xMW5tRUZNNW1BUkRSQkpySHlHVVBMYVZUMmgKeHU2L3pNeXZFMUQz*  
> *S2YvNjRray96Tlp5QlowV1VwdXJWY29TWFFJREFRQUJBb0lCQUFoclVCTWlzUDFP*  
> *aGlvUQo1VUZHb3M1VQZ2FVTHZlTWZj*RRTXZQCkdIVzNFUk5hNUtpbHVSNGhX**  
> *N244NkFMVVFqegp0eE9jTEtubjdBcDArVittdGdOMjM1RUVhNXViSENFTGIvdDBR*  
> *YUkwVGZ0NVFIUWo4azRqdE1qZ3IyaHlrZjZlCnlrbjVUTktURmNYWWtVNDBSUUV5*  
> *b015OXF2cVRZRXJ3R*Gc5b2g2WEVKYTVUY3lWckNXQmJKemMrU3VDUVBUQTB2Sytq*  
> *aXFXbHc3dDJQYlFCQUZiUW50cnQxCjh4V3A4aElTa0g1eTVnWmVEMUtVeWpPMmdW*  
> *eXlpNHdiQVJMVkQ1aHZJZnBDMEJhRzB**Na3BXSjJmM0Q4TGsKMzRBeFhtamgwOXllL3Yy*  
> *ckZ3bGVmSGM2Z01hcGZyejlGSGduT0tlQmN0V3hDUzdKN0tXOHVwSmMzdlBvUjB3*  
> *ZgozMU1VcytLcUI1UUVVYlZEdjQva0tFS3UrSjN0WVA4ZWVURit1Vy9oZlQ0V1I0*  
> *N01DRHBXdFlmanB6VzBka3FxCkRXQ1BFRmpqqmljaFFRSmRjOXg0c0JaOTY1alMz*  
> *b1hKa3RaR09xMW5tRUZNNW1BUkRSQkpySHlHVVBMYVZUMmgKeHU2L3pNeXZFMUQz*  
> *S2YvNjRray96Tlp5QlowV1VwdXJWY29TWFFJREFRQUJBb0lCQUFoclVCTWlzUDFP*  
> *aGlvUQo1VUZHb3M1VQZ2FVTHZlTWZj*RRTXZQCkdIVzNFUk5hNUtpbHVSNGhX**  
> *N244NkFMVVFqegp0eE9jTEtubjdBcDArVittdGdOMjM1RUVhNXViSENFTGIvdDBR*  
> *YUkwVGZ0NVFIUWo4azRqdE1qZ3IyaHlrZjZlCnlrbjVUTktURmNYWWtVNDBSUUV5*  
> *b015OXF2cVRZRX*tmSGlaVmZwRHMzampBSUJaQ2pxem52OVBJ**zajd5d2dK***  
> *VkJsc1M5UnFrR05sSS9WSmdqNwp4TWVDT3VhcmJDWTdBTWR1RFlQQy8rb0ZmVzE0*  
> *ZHJZUyt3RkxGTHA0MzZDWnp6T3NJRHNPalhQUy9iUnh4ZUZwCnZMNmJVd0tCZ1FE*  
> *bEMxdkNmclRuZkxndnp2UXZqN0RWYW9ZeDRoT2V2WFp3VTBEYjBUc09STEJta1ly*  
> *cXdqeDEKNE9tNnpERmpXMzJvTU1EODhTBDMEJhRzB5cG9IRDloN0cvZzBmZDMKNjY*  
> *a2JVbjBBTGlxanA0OCtwTFdVck1KR1JUb2VKNUh5dDhmZXN4YlRobHRwMTBKUXlt*  
> *ZzhhdkRCZwpiZm9GGk5VK3ZrTEVqZjNHM2ZwZGxnaW9Ud3RHZituemVQR0trMlNm*  
> *M1ZIcm9vWngxdW5CdUxhbFVCM0NnckN6CjhvejAwYXFWZ1ZNbnRURkM4R2JXRmhi*  
> *TmVBTUg5Z05TQ0I3VHc3SnRhaGpYWmJwRjFtOEdqNlJtN3o3amJ0R2YKY3RTZ2pJ*  
> *VUNnWUVBK2dVSXBmeG01MVM1QXhpcDdKYVY5b0pTWFl5RVJ5TlF*SksySjY3M1*  
> *MXNKbjhzeEQ4QQJyS3V2RkZ5dWU5TUNnWUVBcmlML2FReXBaNG44Nm9rdElSbXAK*  
> *RFc2cmkzaXBVUnJwY3FvR1g4Z1BWRGplR1ROcGJtRjd6aEdjZndjLy80a3crOWVC*  
> *TjlpbDNRVVdQUlMrTGhOZAo4ZnNEZUF0UHZ0amVGG1JQZlI2cmcrazloUzZNVGQ4*  
> *NEhkRDBFR3ZDQWpJd3F0UDdgGWK3lEcExlMWl2YkgyeE9XCnJCejkvdDRScWs5S3o3*  
> *SllYTlBGbWtVQ2dZQm8vL2JpV2RnWUUxRUNMc3hkci9wOUtSMStLbE1YNUhkeGxp*  
> *TSsKL0EzbzZEdFBqRFVsa1RhbmV0NUtmSGlaVmZwRHMzampBSUJaQ2pxem52OVBJ*  
> *VkJsc1M5UnFrR05sSS9WSmdqNwp4TWVDT3VhcmJDWTdBTWR1RFlQQy8rb0ZmVzE0*  
> *ZHJZUyt3RkxGTHA0MzZDWnp6T3NJRHNPalhQUy9iUnh4ZUZwCnZMNmJVd0tCZ1FE*  
> *bEMxdkNmclRuZkxndnp2UXZqN0RWYW9ZeDRoT2V2WFp3VTBEYjBUc09STEJta1ly*  
> *cXdqeDEKNE9tNnpERmpXMzJvTU1EODhTS3I0UVJibTRkamNJTFR2MXl2MnNINFFp*  
> *VkYrWHFoRUxIZjF2dEUvNWZhNnZiOQpPeGlkVFB2OE14ZGhESEJwUmZ1OW9hbk9v*  
> *aForeXg5OGVMYzBLQlc3Zk9hoMXF1dVVzS1E9PQotLS0tLUVORCBSU0EgUFJJ*  
> *VkFURSBLRVktLS0tLQo==*

Copy the entire text and paste it in the Key field in the iOS Service in
the Agent Desktop.

Do the same with the ***cert.txt ***file and <span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">paste
the content in the Certificate field.</span>

<span
style="background-color: transparent;font-size: 10.0pt;line-height: 13.0pt;">  
</span>

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[2\_cert\_menu.png](attachments/1048822/1344257.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[3\_cert\_step1.png](attachments/1048822/1344258.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[4\_cert\_step2\_upload.png](attachments/1048822/1344259.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[5\_cert\_step3\_ready.png](attachments/1048822/1344244.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[5a\_keychain\_cert\_list.png](attachments/1048822/1344245.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[6\_keychain\_explode\_key.png](attachments/1048822/1344246.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[7\_export\_cert.png](attachments/1048822/1344247.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[8\_password\_empty.png](attachments/1048822/1344248.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[9\_export\_key.png](attachments/1048822/1344249.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[9a\_terminal\_openssl\_cert.png](attachments/1048822/1344250.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[9b\_terminal\_openssl\_key.png](attachments/1048822/1344251.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[2\_cert\_menu.png](attachments/1048822/1344261.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[3\_cert\_step1.png](attachments/1048822/1344260.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[4\_cert\_step2\_upload.png](attachments/1048822/1344267.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[5\_cert\_step3\_ready.png](attachments/1048822/1344266.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[5a\_keychain\_cert\_list.png](attachments/1048822/1344265.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[6\_keychain\_explode\_key.png](attachments/1048822/1344264.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[7\_export\_cert.png](attachments/1048822/1344252.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[8\_password\_empty.png](attachments/1048822/1344253.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[9\_export\_key.png](attachments/1048822/1344254.png) (image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[9a\_terminal\_openssl\_cert.png](attachments/1048822/1344255.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" />
[9b\_terminal\_openssl\_key.png](attachments/1048822/1344256.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 20.28.45.png](attachments/1048822/1344236.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 20.28.10.png](attachments/1048822/1344237.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 20.27.59.png](attachments/1048822/1344239.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 20.27.49.png](attachments/1048822/1344238.png)
(image/png)  
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen
Shot 2014-01-28 at 20.27.44.png](attachments/1048822/1344241.png)
(image/png)  

Document generated by Confluence on Oct 23, 2019 16:11

[Atlassian](http://www.atlassian.com/)
