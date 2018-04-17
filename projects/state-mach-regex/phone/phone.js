var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin

rl.on('line', function(line) {
  // !!!! IMPLEMENT ME

  // Come up with the phone regex

  // Find matches
  const matches = line.match(
    /(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}/g
  );
  // If match found, print number with no spaces, parens, or dashes
  if (matches) {
    matches.forEach(num => {
      console.log(
        num
          .split('')
          .reduce(
            (strip, char) =>
              char.match(/[0-9]/) != null ? strip + char : strip,
            ''
          )
      );
    });
  } else {
    console.log('No number found');
  }
  // Else print that no number was found
});
