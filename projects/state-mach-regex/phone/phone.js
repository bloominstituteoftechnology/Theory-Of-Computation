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
    const phoneReg = /[(]?(\d{3})[-. )]?[-. ]?(\d{3})[-. ]?[-. ]?(\d{4})[-. ]?/g;

    // Find matches
    const matches = line.match(phoneReg);
    // console.log(matches);
    const newMatch = matches[0].replace(/[()-\s]/g, '');
    // console.log('newMatch: ', newMatch);

    if (newMatch) {
      // If match found, print number with no spaces, parens, or dashes
      console.log(newMatch);
    } else {
      // Else print that no number was found
      console.log('No number was found');
    }
});