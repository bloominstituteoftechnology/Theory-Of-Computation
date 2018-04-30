var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', (line) => {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    // Find matches
    const findMatch = line.match(phoneRegex);

    // If match found, print number with no spaces, parens, or dashes
    let newNum = line.replace(/[()-\s]/g, '');

    if (findMatch) console.log(newNum);

    // Else print that no number was found
    else console.log('No number was found');
});

/* output

  Terries-MacBook-Pro:phone TERR1E$ node phone.js
  555-123-4567
  5551234567
  5551234567
  5551234567
  (555) 123-4567
  5551234567
  555 123 4567
  5551234567

*/
