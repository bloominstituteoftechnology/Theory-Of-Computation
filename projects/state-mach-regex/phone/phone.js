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
    const phoneReg = /(\d{3,4})/g;
    // Find matches
    const phoneNum = line.match(phoneReg);
    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
    
});
