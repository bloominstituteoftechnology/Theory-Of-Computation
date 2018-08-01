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
  const regex = /\s*[(]*(\d{3})?[) -]*(\d{3})?[- ]*(\d{4})?\s*/g;

  // Find matches
  const matches = line.match(regex);

  // If match found, print number with no spaces, parens, or dashes
  // Else print that no number was found
  if (matches) {
    console.log(
      `Area code: ${matches[0]}\nPrefix: ${matches[1]}\nSuffix: ${matches[1]}`
    );
  } else {
    console.log("No number was found.");
  }
});
