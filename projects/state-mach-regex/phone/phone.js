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
  let regex = /\(\+\d{ 1, 2 }\s)?\(?\d{ 3 }\)?[\s.-]\d{ 3 }[\s.-]\d{ 4 }/;
    // Find matches
  let matches = line.match(regex);
    // If match found, print number with no spaces, parens, or dashes
    // Else print that no number was found
  if (matches === null) {
    console.log('No number was found');
  }
  else {
    console.log('Area Code: ', matches[1]);
    console.log('Prefix: ', matches[2]);
    console.log('Suffix: ', matches[3]);
  }
});
