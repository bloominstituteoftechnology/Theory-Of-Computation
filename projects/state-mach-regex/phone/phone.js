var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

  // !!!! IMPLEMENT ME
  // Come up with the phone regex
  const regex = /^([0-9]{10})|(\D*[0-9]{3}\D*[0-9]{3}\D*[0-9]{4})/g;

  // Find matches
  // const phoneMatch = 

  // If match found, print number with no spaces, parens, or dashes

  // Else print that no number was found
});
