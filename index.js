'use strict';

var rest = require('restler');

class ImageFilterer {
  constructor(items) {
    this.items = items || [];
  }

  addItem(item) {
    this.items.push(item);
  }

  testImage(url, item) {
    return new Promise(function (resolve, reject) {
        var timeout = 5000;
        var timer, img = new Image();
        img.onerror = img.onabort = function () {
            clearTimeout(timer);
            // reject("error with this image: " + url);
            resolve(undefined);
        };
        img.onload = function () {
            clearTimeout(timer);
            resolve(item);
        };        

        img.src = url;
      });
  }

  testImageNonBrowser(url, item) {
    return new Promise(function(resolve, reject) {
      // console.log("TESTING IMAGE", url)
      rest.get(url).on('success', function(data) {
        // console.log("TESTED IMAGE");
        resolve(item);
      }).on('fail', function(data) {
        resolve(undefined);
      })
    });
  }

  cleanImages() {
    // console.log("cleaning images");
    var thisState = this;
    var promises = [];
    thisState.items.forEach((image) => {
      promises.push(this.testImage(image.image, image));
    });

    return promises;
  }

  returnValidImages() {
    var promises = this.cleanImages();
    Promise.all(promises).then(function(success) {
      var images = success.filter((image) => { return image !== undefined });
      return images;
    }, function(err) {
      // console.log('error over here', err);
      return Error("Error");
    })
  }

  allImages() {
    return this.items;
  }
}

module.exports = ImageFilterer;