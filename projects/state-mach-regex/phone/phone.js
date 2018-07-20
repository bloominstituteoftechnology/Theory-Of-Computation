var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// This code reads a line at a time from stdin
console.log("enter in a phone number please: ");

rl.on("line", function(line) {
  const matches = line.split(regex);
  if (matches === null) {
    console.log("no number was found");
  } else {
    console.log(
      `area code: ${matches[1]}\nprefix: ${matches[2]}\nsuffix: ${matches[3]}`
    );
  }
  // !!!! IMPLEMENT ME
  // Come up with the phone regex
  // Find matches
  // If match found, print number with no spaces, parens, or dashes
  // Else print that no number was found
});
