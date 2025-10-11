'use strict';
const fs = require('fs');

const fileContents = fs.readFile(process.argv[2], 'utf8', function finishedReading(err, fileContents) {
  if (err) {
    return console.log(err);
  }
  console.log(fileContents.split('\n').length - 1);
});