# Javascript/ES6

You dont need to worry if you want to write Modern ES6 code, Gulp will convert our modern JS to ES5 thanks to **babel** so that we dont need to worry about major browser compatibilities for our scripts.

Here is a quick explanation about our js files in our theme:

```bash
js/
├── script.js # This file will get imported in our page
└── scripts
    ├── main.js # We write our js code here
    └── vendors
        ├── bootstrap
        └── slick
```

When we start to write js code, gulp will read our `main.js` file, convert it to a more compatible code for major browsers, minify it and paste it on our `script.js` file.

A Quick example of an ES6 code and a convert ES5 using babel by Gulp:
ES5
```javascript
let $ = jQuery;

function smooth_scroll() {
  $("a.scroll").each(function() {
    $(this).on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          1000,
          function() {
            $(".header__container").addClass("active");
          }
        );
      }
    });
  });
}

function deferImages() {
  var imgDefer = document.getElementsByTagName("img");
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute("data-src")) {
      imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
    }
  }
}

function deferIframes() {
  $("iframe").each(function() {
    $(this).attr("src", $(this).attr("data-src"));
  });
  // Something nice.
}

// Run functions on load
$(function() {
  smooth_scroll();
  deferImages();
  deferIframes();
});

// Run functions on resize
$(document).on("load resize", () => {
  // Code
});
```
Minified compatible Js version code
```javascript
"use strict";var $=jQuery;function smooth_scroll(){$("a.scroll").each(function(){$(this).on("click",function(t){if(""!==this.hash){t.preventDefault();var e=this.hash;$("html, body").animate({scrollTop:$(e).offset().top},1e3,function(){$(".header__container").addClass("active")})}})})}function deferImages(){for(var t=document.getElementsByTagName("img"),e=0;e<t.length;e++)t[e].getAttribute("data-src")&&t[e].setAttribute("src",t[e].getAttribute("data-src"))}function deferIframes(){$("iframe").each(function(){$(this).attr("src",$(this).attr("data-src"))})}$(function(){smooth_scroll(),deferImages(),deferIframes()}),$(document).on("load resize",function(){})
```