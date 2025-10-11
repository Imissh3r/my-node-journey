'use strict';
const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, dirContents) => {
  if (err) {
    return console.log(err);
  }
  dirContents.forEach(function (file) {
    if (path.extname(file) === `.${process.argv[3]}`) {
      console.log(file)
    }
  })
})

// function filterFiles(fileList) {
//   for (let i = 0; i < fileList.length; i++) {
//     if (path.extname(fileList[i]) === '.txt') {
//       console.log(fileList[i]);
//     }
//   }
// }