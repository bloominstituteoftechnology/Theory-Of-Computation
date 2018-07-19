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
    const regexSetUp = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;

    // Find matches
    const searched = line.match(regexSetUp);

    // If match found, print number with no spaces, parens, or dashes
    if (searched) {
      console.log(searched);
      return;
    }

    // Else print that no number was found
    console.log('Failed. Please try again...');
});
