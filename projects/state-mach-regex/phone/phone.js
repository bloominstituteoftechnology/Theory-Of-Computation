var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // Find matches
    const regexp = new RegExp(/\d{10}|\(?(\d{3})\)?(\s|-)?(\d{3})(\s|-)?\d{4}/, 'g')
    // If match found, print number with no spaces, parens, or dashes
    if(regexp.test(line)){
      line.replace(/[\s\-\(\)]+/g, "");
    } else {
      console.log("No number found.");
    }
    // Else print that no number was found
});
