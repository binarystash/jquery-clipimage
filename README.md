[![Build Status](https://travis-ci.org/binarystash/jquery-clipimage.svg?branch=master)](https://travis-ci.org/binarystash/jquery-clipimage)

# ClipImage

The jQuery Clipimage plugin allows you to clip images using canvas and VML. The technique presented on [Cross-browser image masking using javascript, VML and the HTLM5 canvas element](http://www.jaypan.com/tutorial/cross-browser-image-masking-using-javascript-vml-and-htlm5-canvas-element) was used.

## Demo
Play with a [fiddle](http://jsfiddle.net/binarystash/vjGzb/light/).

## Installation

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/binarystash/jquery-clipimage/master/dist/jquery.clipimage.min.js
[max]: https://raw.github.com/binarystash/jquery-clipimage/master/dist/jquery.clipimage.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery-clipimage.min.js"></script>
```

## Usage

1. Suppose you have the following images.
    ```html
    <img src="image1.jpg" alt=""/>
    <img src="image2.jpg" alt=""/>
    ```

2. Clip them. The plugin accepts the `points` option which is an array of coordinates.
    ``` javascript
    jQuery("img").clipimage({
        points:[[0,0],[322,0],[0,480]] 
    });
    ```

## Compatibility
Tested on IE7-11, latest versions of Firefox, Chrome, and Safari

## Support
Report bugs at https://github.com/binarystash/jquery-clipimage/issues.

## Credits
* [Cross-browser image masking using javascript, VML and the HTLM5 canvas element](http://www.jaypan.com/tutorial/cross-browser-image-masking-using-javascript-vml-and-htlm5-canvas-element)
* [Best way to detect that HTML5 <canvas> is not supported](http://stackoverflow.com/questions/2745432/best-way-to-detect-that-html5-canvas-is-not-supported)
* [Modernizr Test for VML](https://gist.github.com/farmdawgnation/2636061)
