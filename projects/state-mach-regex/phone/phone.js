var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin

rl.on('line', function(line) {
  // !!!! IMPLEMENT ME

  // Come up with the phone regex
  const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?([0-9]{4})$/;

  // Find matches
  const matches = line.match(regex);

  // If match found, print number with no spaces, parens, or dashes
  if (matches) {
    console.log('number: ', matches[1] + matches[2] + matches[3]);
    console.log(`Area Code: ${matches[1]}\nPrefix: ${matches[2]}\nSuffix: ${matches[3]}`)
  } else {
    console.log('No Number Was Found');
  }

  // Else print that no number was found
});

// 0120123456789
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// abcdefghijklmnopqrstuvwxyz
// The Quick Brown Fox Jumped over the lazy dog.
// _^[]\`

// ~!@#$%&*()+-=
// {}|;':",./<>?
// 123-123-1234-123
