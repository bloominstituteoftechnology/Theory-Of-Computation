var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


  // Come up with the phone regex
const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;
// This code reads a line at a time from stdin

rl.on('line', function (line) {

  // Come up with the phone regex
  // Find matches
  const matches = line.match(regex);


  // If match found, print number with no spaces, parens, or dashes
  if(!matches) {
    console.log('No number found');
  } else {
    // Else print that no number was found
    console.log('Area code: ${mathes[1]}\nPrefix: ${matches[2]}\nSuffix: ${matches[3]}');
  }
});
