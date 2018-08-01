var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME
    if (line === 'exit') process.exit(0);

    // Come up with the phone regex
    const regex = /\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/;

    // Find matches
    const matches = line.match(regex);

    // If match found, print number with no spaces, parens, or dashes
    if (matches !== null) {
      console.log(matches[1] + matches[2] + matches[3]);
    } else { // Else print that no number was found
      console.log("No phone number found.");
    }
});
