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
  //https://www.regextester.com/17
  const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;
  // Find matches
  const matches = line.match(regex);

  // If match found, print number with no spaces, parens, or dashes
  if (matches) {
    console.log(`Area code: ${matches[1]}`);
    console.log(`Prefix: ${matches[2]}`);
    console.log(`Suffix: ${matches[3]}`);
    // Else print that no number was found	
  } else {
    console.log('No phone number found');
  }
});