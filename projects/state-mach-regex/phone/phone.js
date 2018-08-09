const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// What the REGEX should do: 
// 1.match on 0 or 1 opening parens
// 2.match on three digits
// 3.match on 0 or 1 closing parens
// 4.match on 0 or more spaces
// 5.match on 3 digits
// 6.match on 0 or more spaces
// 7.match on 0 or 1 dashes
// 8.match on 4 digits

// Solution implementation:
// const phoneRegex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/; // -adding the global flag 'g'
// at the end of this regex causes the area code, prefix, and suffix to not appear undefined,
// however, the 'g' flag is neccessary to match all formats on RegExr.

// My (working) implementation:
const phoneRegex = /^[(]{0,1}([0-9]{3})[)]{0,1}[-\s\.]{0,1}([0-9]{3})[-\s\.]{0,1}([0-9]{4})$/;
// -much like in the solution above, my regex needed the 'g' and 'm' flag on RegExr and yet 
// if I included it in the regex here, it causes the variable 'matches' to be undefined.
// -what wasn't working last week: besides the flags at the end, I needed to group the digits

// This code reads a line at a time from stdin
rl.on('line', function (line) {
    // Come up with the phone regex
    // Find matches
    const matches = line.match(phoneRegex);
    console.log("Matches: ", matches);
    // If match found, print number with no spaces, parens, or dashes
    if (matches) {
      console.log(`Area Code: ${matches[1]}\nPrefix: ${matches[2]}\nSuffix: ${matches[3]}`);
    // Else print that no number was found
    } else {
      console.log('no number found');
    };
});
