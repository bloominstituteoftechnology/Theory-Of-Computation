var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {
  let matches = line.match(/^\s*(?:\+(\d+)\s+)?\(?(\d{3})\:?\)?\-?\s*(\d{3})\-?(\d{4})/);
  if (matches && (matches.length == 4 || matches.length == 5))  {
    console.log(`${matches[1] != undefined ? matches[1] : ""}${matches[2]}${matches[3]}${matches[4]}`);
  }
  else 
    console.log("no number was found")

    // !!!! IMPLEMENT ME

    // Come up with the phone regex

    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
