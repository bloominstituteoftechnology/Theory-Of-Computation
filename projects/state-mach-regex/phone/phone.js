var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdino

// Check for 0 or 1 opening parens
// Check for three digits
// Match on 0 or 1 closing parens
// Match on 0 or more spaces
// Match on 0 or 1 dashes
// Match on 3 digits
// Match on 0 or more spaces
// Match on 0 or 1 dashes
// Match on 4 digits

// Wrting the regex
const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    const matched = line.match(regex);

    // Find matches
    if (!matched) {
      console.log('Number not found'); // If no match
    } else {
      console.log(`Area code: ${matched[1]}\nPrefix: ${matched[2]}\nSuffix: ${matched[3]}`); //Output of matched phone #s
    }

    // If match found, print number with no spaces, parens, or dashes
    // Else print that no number was found
});