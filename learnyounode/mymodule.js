'use strict';

module.exports = (dir, ext, callback) => {
  const fs = require('fs');
  const path = require('path');
  const filteredArray = [];

  fs.readdir(dir, (err, dirContents) => {
    if (err) {
      return callback(err);
    }
    dirContents.forEach(function (file) {
      if (path.extname(file) === `.${ext}`) {
        filteredArray.push(file);
      }
    })
    callback(null, filteredArray);
  })
};