// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });


// This code reads a line at a time from stdin

// rl.on('line', function (line) {
    // !!!! IMPLEMENT ME
const rf = `
  555-123-4567
  5551234567
  (555) 123 - 4567
  555 123 4567`;
    // Come up with the phone regex
const reg = /\b\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.● ]?[-.● ]?[-.● ]?([0-9]{4})\b/g;
    // Find matches
  let ans = rf.match(reg);
    // If match found, print number with no spaces, parens, or dashes
  console.log(ans);
    // Else print that no number was found
// });
// as you can see I am still not able to capture the openning parenthesis