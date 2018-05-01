var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME
    const regExp = /\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/;
    // Come up with the phone regex
    const match = line.match(regExp);
    // Find matches

    // If match found, print number with no spaces, parens, or dashes
    if (match !== null) {
      console.log(`${match[1]}${match[2]}${match[3]}`);
    }
    // Else print that no number was found
    else {
      console.log('Bad phone number Format');
    }
});
