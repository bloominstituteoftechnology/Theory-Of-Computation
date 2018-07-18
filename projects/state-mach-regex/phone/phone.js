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
    let regex = /\(?(\d{3})\)? ?-?(\d{3})-? ?(\d{4})/g
    // Find matches
    let match = line.match(regex);
    match = match.join('').replace(/[^0-9]/gi, '');
    // If match found, print number with no spaces, parens, or dashes
    if(match) {
      console.log(match);
    } else {
      console.log("Number not found");
    }
    // Else print that no number was found
});
