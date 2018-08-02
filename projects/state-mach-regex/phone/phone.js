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
    const dig = line.replace(/\D/g, '');

    if (digits === '') {
      console.log('No number was found');
    }

    // Find matches
    const areaCode = digits.substring(0,3);
    const prefix = digits.substring(3,6);
    const suffix = digits.substring(6,10);

    // If match found, print number with no spaces, parens, or dashes
    console.log(`Area code: ${areaCode} \nPrefix: ${prefix} \nSuffix: ${suffix}`);
    return

    // Else print that no number was found
});
