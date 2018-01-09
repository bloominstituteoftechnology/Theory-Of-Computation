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
  const phoneRegex = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;

  // If match found, print number with no spaces, parens, or dashes
  if(phoneRegex.test(line)){
    const formattedLine = line.replace(/[- )(]/g, '');
    console.log(formattedLine);
  } else {   // Else print that no number was found
    console.log("not a phone number");
  }
});
