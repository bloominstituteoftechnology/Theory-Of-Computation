const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin

rl.on("line", function(line) {
  // Come up with the phone regex

  const regex = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

  // Find matches

  const phone = line.match(regex);

  // If match found, print number with no spaces, parens, or dashes
  // Else print that no number was found

  if (phone) {
    console.log(phone[1] + phone[2] + phone[3]);
  } else {
    console.log("No number was found");
  }
});
