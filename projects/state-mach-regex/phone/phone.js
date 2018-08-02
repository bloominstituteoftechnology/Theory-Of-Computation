const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    const digits = line.replace(/\D/g, "");

    if (digits === "") {
      console.log("Error: found no numbers");
    }

    // Find matches
    const areaCode = digits.substring(0, 3);
    const prefix = digits.substring(3, 6);
    const suffix = digits.substring(6, 10);

    // If match found, print number with no spaces, parens, or dashes
    console.log(`Are Code: ${areaCode} \nPrefix: ${prefix} \nSuffix: ${suffix}`);
    return
    // Else print that no number was found
});
