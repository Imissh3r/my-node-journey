'use strict';

const mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], (err, filteredArray) => {
  if (err) console.log(err);
  else {
    filteredArray.forEach(e => {
      console.log(e);
    });
  }
})