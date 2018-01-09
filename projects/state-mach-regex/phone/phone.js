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
    const reg = /(\d{3}).*(\d{3}).*(\d{4})/;
    // Find matches
      if (reg.test(line)) {
        const match = line.match(reg);
        console.log(match[1] + match[2] + match[3]);
      } else {
        console.log('number not found!');
      }
    // If match found, print number with no spaces, parens, or dashes
      
    // Else print that no number was found
});
