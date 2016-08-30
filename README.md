# Image Filterer

[![Build Status](https://travis-ci.org/raksonibs/emoji-pad.svg?branch=master)](https://travis-ci.org/raksonibs/emoji-pad)

Currently images have the form: {title: "1WI7", slug: null, image: "https://s3-us-west-2.amazonaws.com/badcomics/badcomics/gifs/145/original.png", rating: 0, name: null} with a keyable image attribute in the Object form.

Also works on browser level where new Image() element is exposed.


## Install

```
$ npm install --save image-filterer
```


## Usage

```js
// invalid second url!
import { ImageFilterer } from 'image-filterer';
var array = [
              {title: "1WI7", slug: null, image: "https://s3-us-west-2.amazonaws.com/badcomics/badcomics/gifs/145/original.png", rating: 0, name: null}, 
              {title: "23T3", slug: null, image: "https://s3-us-west-2.amazonaws.com/badcomics/badcomics/gifs/147/original.png", rating: 0, name: null}, 
              {title: "M1M", slug: null, image: "http://media3.giphy.com/media/fKO3LF3DYpxpm/giphy.gif", rating: 0, name: null}
            ];
var imgF = new ImageFilterer(array);
imgF.returnValidImages().length
//=> '2'

imgF.allImages().length
//=> '3'
```


## API

### new ImageFilterer(array)

#### input

Type: `array`

Array to parse for correct images.

### imgF.returnValidImages()

Returns parsed images.

### imgF.allImages()

Returns all images.

## License

MIT © [Oskar Niburski](https://raksonibs.github.io)