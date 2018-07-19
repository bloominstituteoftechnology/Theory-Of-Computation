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
    re = /\(?(\d{3})[)\-.]?\s?(\d{3})[\-.]?(\d{4})/g;
    // Find matches
    match = re.exec(line);
    // If match found, print number with no spaces, parens, or dashes
    if (match) {
      console.log(`Matched: ${match[1]}${match[2]}${match[3]}`);
    } else {
      console.log("No matches");
    }
});
