const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// match on 0 or 1 opening parens
// match on three digits
// match on 0 or 1 closing parens
// match on 0 or more spaces
// match on 3 digits
// match on 0 or more spaces
// match on 0 or 1 dashes
// match on 4 digits

const phoneRegex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;
// const phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/gm;

// This code reads a line at a time from stdin
rl.on('line', function (line) {
    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    // Find matches
    const matches = line.match(phoneRegex);

    // If match found, print number with no spaces, parens, or dashes
    if (matches) {
      console.log(`Area Code: ${matches[1]}\nPrefix: ${matches[2]}\nSuffix: ${matches[3]}`);
    // Else print that no number was found
    } else {
      console.log('no number found');
    };
});
