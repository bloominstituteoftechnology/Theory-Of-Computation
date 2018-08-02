var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin

rl.on("line", function(line) {
  // !!!! IMPLEMENT ME

  // Come up with the phone regex

  // Find matches
  const matchedNumber = line.match(/\(*?(\d{3})[)\- ]*?(\d{3})[\- ]*?(\d{4})/);

  // If match found, print number with no spaces, parens, or dashes
  if (matchedNumber) {
    console.log(
      `Area code: ${matchedNumber[1]}, Prefix: ${matchedNumber[2]}, Suffix: ${
        matchedNumber[3]
      }`
    );
  }

  // Else print that no number was found
  else {
    console.log("The number was not found");
  }
});
