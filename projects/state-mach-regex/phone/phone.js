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
  const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;

    // Find matches
  const match = line.match(regex);
    // If match found, print number with no spaces, parens, or dashes
  if(match !== null) {
    console.log(`Area Code: ${match[1]}`);
    console.log(`Prefix: ${match[2]}`);
    console.log(`Suffix: ${match[3]}`);
  }
    // Else print that no number was found
  else {
    console.log(`number not found!`);
  }
});
