var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME
    const phoneNums = [
      '555-123-4567',
      '5551234567',
      '(555) 123-4567',
      '555 123 4567'
    ];

    // Come up with the phone regex
    const phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/gm;

    // Find matches
    const found = phoneNums.match(phoneRegex);

    // If match found, print number with no spaces, parens, or dashes
    console.log("area code: ", found[1]);
    console.log("prefix: ", found[2]);
    console.log("suffix: ", found[3]);
    // Else print that no number was found
});
