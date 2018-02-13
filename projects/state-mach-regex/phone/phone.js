var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// // This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    const regex = /([0-9])\w+/g;
    // Find matches
    var found = line.match(regex);
    // If match found, print number with no spaces, parens, or dashes
    if (found !== null) {
      console.log(`The phone number is ${line}`);
      rl.close();
    } else {
      // Else print that no number was found
      console.log("No Number was found");
    }
    // Else print that no number was found
});