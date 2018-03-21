var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // Come up with the phone regex
    const regex = /\(?[0-9]{3}\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;
    // Find matches
    const matches = line.match(regex) || [];
    // If match found, print number with no spaces, parens, or dashes
  if (matches.length) {
    console.log('mathces') // Need to finish
  }
    // Else print that no number was found
    else {
      console.log('no number found');
    }
});
