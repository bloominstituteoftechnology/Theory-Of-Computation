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

    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm
    const match = line.match(regex)
    if (match) {
      console.log(match)
    } else {
      console.log('no number was found')
    }
});
