Netflix-Uninterrupter
================================================================
Prevent Netflix from Auto-pausing! Watch your shows uninterrupted the way they were meant to be.
I couldn't find any solution to prevent netflix from stopping and making me click buttons every so often so I created this small script to do it.
INSTALL
----------------------------------------------------------------
CHROME : Install TamperMonkey[1] from the chrome store create a new script in it and paste the contents of this[2] script into it. It has to be installed through this app or chrome will declare it unsafe since it isn't from the appstore which costs money to host.
- FIREFOX : (Untested) Should be compatible with Greasemonkey[3] extension, if not let me know in the comments and I'll make it compatible. When pasting the code into greasemonkey change where the code says @match and change it to @include. Sorry Firefox users. Turns out netflix on firefox uses silverlight to play their videos and not html5. So my script cant work on it yet. Hopefully they update it soon!
INFO
----------------------------------------------------------------
Tested on Google Chrome
Tested on Netflix US
I will add support for any other region if needed/possible, but I think all regions use the same video player
I recommend if you have any issues post them and then check for updates regularly because I'll be ironing any issues out pretty quick.