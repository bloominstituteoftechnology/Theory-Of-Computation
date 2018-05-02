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
  const re = /^[2-9]\d{2}-\d{3}-\d{4}$/g
    // Find matches
  let phoneNumber = line.match(re);
    // If match found, print number with no spaces, parens, or dashes
    console.log(phoneNumber);
    // Else print that no number was found
});
