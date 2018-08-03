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
    const phoneRegEx = /[(]?[0-9]{3}[)-\s\.]*[0-9]{3}[-\s\.]*[0-9]{4}/g;

    // Find matches

    // If match found, print number with no spaces, parens, or dashes
    if (phoneRegEx.test(line)) console.log(line.replace(/[\(\)-\s\.]/g, ''));

    // Else print that no number was found
    else console.log("No number was found.");
});
