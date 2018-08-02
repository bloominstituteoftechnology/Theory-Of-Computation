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
  let digitsOnly = ('' + line).replace(/\D/g, '');
  if (digitsOnly === '') {
    console.log('no number found');
    return;
  }

  // Find matches
  let matched = digitsOnly.match(/^(\d{3})(\d{3})(\d{4})$/);

  // If match found, print number with no spaces, parens, or dashes
  console.log(` You entered ${matched[0]}
   \n Area Code: ${matched[1]} \n Prefix: ${matched[2]} \n Suffix: ${matched[3]}`);

  // Else print that no number was found
});
