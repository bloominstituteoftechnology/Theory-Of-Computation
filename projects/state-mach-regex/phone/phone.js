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
    const phoneReg = /(\d{3,4})/g;
    // Find matches
    const phoneNum = line.match(phoneReg);
    // If match found, print number with no spaces, parens, or dashes
    if (phoneNum && phoneNum.length === 3)
      console.log(`Area code: ${phoneNum[0]}\nPrefix: ${phoneNum[1]}\nSuffix: ${phoneNum[2]}`);
    // Else print that no number was found
    else console.log('No number was found');
});
