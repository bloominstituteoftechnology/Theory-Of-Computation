var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin

rl.on('line', function (line) {
  let regEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  // Starting at the beginning of the string
  // Zero or one opening parenthesis
  // Capture group 1: 3 characters 0-9
  // Zero or one closing parenthesis
  // Either a hyphen, period, or space (zero or one)
  // Capture group 2: 3 characters 0-9
  // Either a hyphen, period, or space (zero or one)
  // Capture group 3: 4 characters 0-9
  // Ends at end of string
  let brokenUp = line.match(regEx);

  if (brokenUp === null) {
    console.log('No number was found.');
  }
  else if (brokenUp != null) {
    let areaCode = brokenUp[1];
    let prefix = brokenUp[2];
    let suffix = brokenUp[3];
    console.log(`Area code: ${areaCode}\nPrefix: ${prefix}\nSuffix: ${suffix}`);
  }
});

