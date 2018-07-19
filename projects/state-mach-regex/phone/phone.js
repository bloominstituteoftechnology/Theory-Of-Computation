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
  const regex = /[0-9]/g;

  // Find matches
  const matches = line.match(regex);

  // If match found, print number with no spaces, parens, or dashes
  if (matches.length === 10) {
    const areacode = matches.slice(0, 3).join("");
    const prefix = matches.slice(3, 6).join("");
    const suffix = matches.slice(6, 10).join("");
    console.log(`
    Areacode: ${areacode}\n
    Prefix: ${prefix}\n
    Suffix: ${suffix}
    `);
  }

  // Else print that no number was found
  else {
    console.log("The number entered is invalid");
  }
});
