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
    const phoneRegex = /\(?(\d{3})\)?[\-|\s]?(\d{3})[\-|\s]?(\d{4})/;
    // Find matches
    const match = line.match(phoneRegex);
    // If match found, print number with no spaces, parens, or dashes
    if (match) {
      console.log(match[1] + match[2] + match[3]);
      return;
    }
    // Else print that no number was found
    console.log("No number was found, suckah.");
});
