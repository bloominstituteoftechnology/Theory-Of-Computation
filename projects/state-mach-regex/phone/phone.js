var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    

    // Come up with the phone regex
  const regex = /\(?(\d{3})\)?-? ?(\d{3})-? ?(\d{4})/;

    // Find matches
  const matches = line.match(regex);

    // If match found, print number with no spaces, parens, or dashes
  if (matches == null) {
    console.log("No phone numbers found.")

    // Else print that no number was found
  } else {
    console.log(`Area code: ${matches[1]}, prefix: ${matches[2]}, suffix: ${matches[3]}`);
  }
});
