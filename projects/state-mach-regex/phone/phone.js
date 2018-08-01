var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

console.log("running...")
// This code reads a line at a time from stdin

rl.on('line', function (line) {
    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    const digits = line.replace(/\D/g, '');

    if (digits === '') {
      console.log('No numbers found');
    }

    // Find matches
    const areaCode = digits.substring(0,3);
    const prefix = digits.substring(3,6);
    const suffix = digits.substring(6,10);

    // If match found, print number with no spaces, parens, or dashes
    console.log(`Area code: ${areaCode} \nPrefix: ${prefix} \nSuffix: ${suffix}`);
    return
});
