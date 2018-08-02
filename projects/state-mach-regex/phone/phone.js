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
    const digits = line.replace(/\D/g, '');
    if (digits === '') {
      console.log("No phone numbers were found");
    }

    // Find matches
    const areaCode = digits.substring(0,2);
    const prefix = digits.substring(3,5);
    const suffix = digits.substring(6,9);

    // If match found, print number with no spaces, parens, or dashes
    console.log(`Area code: ${areaCode} Prefix: ${prefix} Suffix: ${suffix}`)

    // Else print that no number was found
});
