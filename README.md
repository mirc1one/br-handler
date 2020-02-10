# br-handler  
A tiny JavaScript functions that handles different texts on different resolutions on same DOM node.  

Facing problems in Frontend, such as having different line breaks on different viewports always infuriated me.  
So I came up with a simple solution that handles this in a simple manner.  
  
Having only 37 lines of code this functions is optimized for speed and will not cause any issues on any website.  
  
# How to use ?  
Simply include the JavaScript file in your page, I recommend it to be used in footer, if not, you can place it in header as it is non-blocking having *<1 KB (502 bytes minified)*.  

Add a **data-br-handler** attribute on your desired element, and then pass it a **[JSON Object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)** with the keys represeting the breakpoint and value representing the text you want to show at that specific resolution.  
  
In the node just pass it the original text that should appear if no resolution is in breakpoint.  
  
Although you can write whatever you want in any breakpoint, I strongly recommend to use the the same keywords but different format because sometimes it might ruin your website's **SEO**.
  
Have a look in the *index.html* file, it should clarify things enough :)
