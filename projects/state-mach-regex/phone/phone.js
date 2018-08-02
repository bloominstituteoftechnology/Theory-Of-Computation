var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME
    var regex = /([1-9]{3,4})/g;
    var myArray = line.match(regex)
    console.log("Area code: " + myArray[0])
    console.log("Prefix: " + myArray[1])
    console.log("Suffix: " + myArray[2])
    // Come up with the phone regex

    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
