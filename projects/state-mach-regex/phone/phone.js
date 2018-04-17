var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

// This code reads a line at a time from stdin

rl.on('line', function(line) {
  // !!!! IMPLEMENT ME

  // Come up with the phone regex

  const phoneNoParser = /[()-\s]/g;

  // Find matches

  const phoneNo = line.replace(phoneNoParser, '');

  // If match found, print number with no spaces, parens, or dashes

  if (phoneNo.length === 10) console.log(phoneNo);
  else
    // Else print that no number was found

    console.log('No number was found');
});
