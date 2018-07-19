var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

const reg = new RegExp('[(]?([0-9]{3})[)]?[ -]?([0-9]{3})[ -]?([0-9]{4})');

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex

    // Find matches
    const match = line.match(reg);

    // If match found, print number with no spaces, parens, or dashes
    if (match && match.length > 3) {
      console.log("Area code: ", match[1], "\nPrefix: ", match[2], "\nSuffix: ", match[3]);
    } else {
      console.log("No number was detected");
    }
    // Else print that no number was found
});
