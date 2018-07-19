var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {
  let r = /[0-9]{10}/;
  let regex = new RegExp(r, 'g');
  console.log(line.match(regex).join(''));
});
