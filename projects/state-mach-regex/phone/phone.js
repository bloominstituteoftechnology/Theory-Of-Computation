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
    const regex = /^[0-9]{10}$/g

    // Find matches
    const digits = line.replace(/[^\d]/g, "");
    const number = regex.test(digits);
    // If match found, print number with no spaces, parens, or dashes
    if (number) {
      console.log(`The number is ${digits}`);
    }
    // Else print that no number was found
    else {
      console.log("No acceptable number found");
    }
});
