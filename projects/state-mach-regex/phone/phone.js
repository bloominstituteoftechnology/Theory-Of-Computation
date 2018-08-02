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
    const phoneRegex = /\(?(\d{3})[)-]?\s?(\d{3})[-\s]?(\d{4})/
    // Find matches
    const result = line.match(phoneRegex);
    if (result) {
      // If match found, print number with no spaces, parens, or dashes
      process.stdout.write(`Area code: ${result[1]}\nPrefix: ${result[2]}\nSuffix: ${result[3]}\n`)
    } else {
      // Else print that no number was found
      console.log('Invalid phone number.');
    }
});
