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
    let phone = /\(?[0-9]\d+\)?\s?-?[0-9]\d+\s?-?[0-9]\d+/g;

    // Find matches
    let matches = line.match(phone);

    // If match found, print number with no spaces, parens, or dashes
    if(matches) {
      let newMatches = matches[0].replace(/[\(\)-\s]/g, '');
      console.log(newMatches);
    } else {
      console.log("No number was found");
    }
    // Else print that no number was found
});
