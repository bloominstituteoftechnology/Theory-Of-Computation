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
    let regex = /[\W1]?(\d{3})[\W]?[\W]?(\d{3})[\W]?[\W]?[\W]?(\d+)/;

    // Find matches
    let match = line.match(regex);
  
    // If match found, print number with no spaces, parens, or dashes
    if(match !==null) {
      console.log("Area code: "+ match[0] + "Prefix: " + match[1] + "Suffix: " + match[2]);
    } else {
      console.log("Phone number not found.");
    }
    // Else print that no number was found
});
