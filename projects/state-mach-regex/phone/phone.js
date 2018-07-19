var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {
  const matches = line.match(/\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/);

  if (matches === null) {
      console.log("No phone number found");
  } else {
      console.log(`Phone # found: ${matches[1]}${matches[2]}${matches[3]}`);
  }
});