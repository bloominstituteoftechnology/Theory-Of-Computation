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
  regex = /\(?(\d{3})\)?[ -\.]?(\d{3})[ -\.]?(\d{4})/g;
  // Find matches
  match = regex.exec(line);
  // If match found, print number with no spaces, parens, or dashes
  if (match) {
    console.log(
      `Area code: ${match[1]}\nPrefix: ${match[2]}\nSuffix: ${match[3]}\n`
    );
  } else {
    // Else print that no number was found
    console.log("No matches.");
  }
});
