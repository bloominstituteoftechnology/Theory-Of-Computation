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

    const matches = line.match(regex);

    // If match found, print number with no spaces, parens, or dashes
    // Else print that no number was found
    if(matches) {
      console.log(`${matches[0]}${matches[1]}${matches[2]}`)
    }

    else {
      console.log("No matches found")
    }
});
