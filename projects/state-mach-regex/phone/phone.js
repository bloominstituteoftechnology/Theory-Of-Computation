var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

  // !!!! IMPLEMENT ME
  let testArr = [
    '555-123-4567',
    '5551234567',
    '(555) 123 - 4567',
    '555 123 4567'];

  // Come up with the phone regex
  let reg = /[^1(0]\d{3}[^-\s)][^-\s)]?\d{3}[^-\s)][^-\s)]?\d{4}/;
  // Find matches

  // If match found, print number with no spaces, parens, or dashes

  // Else print that no number was found
});
