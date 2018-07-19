'use strict'
var readline = require('readline');
let regex = /\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?(\d{4})/;


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {
    // !!!! IMPLEMENT ME
    const matches = line.split(regex);
    if(matches === null) {
      console.log('no number was found')
    } else {
      console.log(`area code: ${matches[1]} \n prefix: ${matches[2]} \n suffix: ${matches[3]}`)
      
    }
});
