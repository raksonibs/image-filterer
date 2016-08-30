var assert = require('assert');
var { ImageFilterer } = require('../index');

describe('imageFilter', function() {  
  it('should filter bad images', function() {
    // second is an invalid url!;
    var array = [
                  {title: "1WI7", slug: null, image: "https://s3-us-west-2.amazonaws.com/badcomics/badcomics/gifs/145/original.png", rating: 0, name: null}, 
                  {title: "23T3", slug: null, image: "https://s3-us-west-2.amazonaws.com/badcomics/badcomics/gifs/147/original.png", rating: 0, name: null}, 
                  {title: "M1M", slug: null, image: "http://media3.giphy.com/media/fKO3LF3DYpxpm/giphy.gif", rating: 0, name: null}
                ];

    var imgF = new ImageFilterer(array);
    assert.equal(imgF.returnValidImages().length, 2);
  });
});