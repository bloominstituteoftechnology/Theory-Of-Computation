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
    const m = line.match(regex);
    // If match found, print number with no spaces, parens, or dashes
    // Else print that no number was found
    if (m) {
      for (let i = 0; i < m.length; i++) {
        console.log(`${m[i]}`);
      }
    } else {
      console.log('No number found');
    }
});
