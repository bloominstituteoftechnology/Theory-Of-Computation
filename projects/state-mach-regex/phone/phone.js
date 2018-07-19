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
    const phoneRegex = /\(?(\d{3})\)?\s?-?(\d{3})?\s?-?(\d{4})/;

    // Find matches
    const phoneMatches = line.match(phoneRegex);

    // If match found, print number with no spaces, parens, or dashes
    if (phoneMatches) {
      console.log("Area Code:", phoneMatches[1]);
      console.log("Prefix:", phoneMatches[2]);
      console.log("Suffix:", phoneMatches[3]);
    }
    // Else print that no number was found
    else {
      console.log("No number was found.")
    }
});
