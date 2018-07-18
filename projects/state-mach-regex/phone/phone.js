var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin
const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;

rl.on('line', function (line) {


  // Find matches
  const matches = line.match(regex);

  if (matches === null) console.log('No phone number found');
  else {
    console.log(`Area code: ${matches[1]}`);
    console.log(`Prefix: ${matches[2]}`);
    console.log(`Suffix: ${matches[3]}`);
  }
});
