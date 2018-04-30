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
    const regex = /(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/g;

    // Find matches
    const matches = line.match(regex);

    // If match found, print number with no spaces, parens, or dashes
    if (matches !== null) {
      console.log('Phone number found!');
    } else { // Else print that no number was found
      console.log("No phone number found.");
    }
});
