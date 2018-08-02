var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

// This code reads a line at a time from stdin

rl.on('line', function(line) {
  // !!!! IMPLEMENT ME

  // Come up with the phone regex
  const regx = /\d+/g;
  const amyRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  // Find matches
  const matches = line.match(amyRegex);

  // If match found, print number with no spaces, parens, or dashes

  if (matches) {
    let separateDigits = matches[0].match(regx);
    separateDigits = separateDigits.join('');
    console.log('separateDigits', separateDigits.length, separateDigits);
    console.log(`
    Area code:\t${separateDigits.slice(0, 3)}
    Prefix:\t${separateDigits.slice(3, 6)}
    Sufix:\t${separateDigits.slice(6)}
    `);
  } else {
    console.log('No number was found or something went wrong with the input');
  }
});
