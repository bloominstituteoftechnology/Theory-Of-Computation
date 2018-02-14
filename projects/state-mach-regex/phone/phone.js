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
  
    // Find matches
  if (line.replace(/[^\d]/g, '').length <= 10) {
    return line.replace(/[^\d]/g, '');
  } return ('no number found')

  // line.replace(/[^\d]/g, '').length <= 10 ? line.replace(/[^\d]/g, '') : 'no number found';
    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});

// returns only phone numbers with 10 characters or less, with only digits present