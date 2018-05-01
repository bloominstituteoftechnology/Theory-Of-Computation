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
    let reg = /^\(?\d{3}\)?\ ?\-?\d{3}\-?\ ?\d{4}$/g
    // Find matches
    let match = line.match(reg);

    if(match){
      // If match found, print number with no spaces, parens, or dashes
      console.log('Phone Number: ', match[0]);
    } else {
      // Else print that no number was found
      console.log("No number found!");
    }
});
