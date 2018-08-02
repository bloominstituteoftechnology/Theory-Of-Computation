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
    const phoneRegex = /(?:.*)([0-9]{3})(?:.*?)([0-9]{3})(?:.*?)([0-9]{4})/

    // Find matches
    const found = line.toString().match(phoneRegex);

    // If match found, print number with no spaces, parens, or dashes
    if (found) {
      console.log('Area code: ', found[1])
      console.log('Area code: ', found[2])
      console.log('Area code: ', found[3])
    }
    // Else print that no number was found
    else {
      console.log('No phone number found')
    }
});
