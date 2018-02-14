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
    numbers: ['555-123-4567',
    '5551234567',
    '(555) 123-4567',
    '555 123 4567]']
    // Find matches
    numbers.forEach((val) => {
      //replaces all the symbols for nothing; also not that '\]' is how you replace bracket inside the bracket
      val = val.replace(/[-()\s\]]/g, '');
      console.log(val);
    })
    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
