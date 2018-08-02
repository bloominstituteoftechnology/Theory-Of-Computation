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
  const regex = /(\(\d{3}\)\s)|(\d{3}|-|\s)|(\d*)/g;
  newnumber = "";
  const match = line.match(regex);
  if (match !== null) {
    const rgx = /[0-9]/g;
    const matches = line.match(rgx);
    if (matches.length === 10 && matches !== null) {
      console.log(matches.join(""));
    } else {
      console.error("Not a US phone number!");
    }
  } else {
    console.error("Not a US phone number!");
  }
});