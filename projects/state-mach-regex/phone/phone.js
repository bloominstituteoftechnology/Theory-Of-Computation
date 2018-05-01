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
    const regex = /(\d+)[\)-\s]*(\d+)[-\s]*(\d+)/g

    // Find matches
    
    const number = regex.exec(line);

    // If match found, print number with no spaces, parens, or dashes

    if (number) console.log(number[1] + number[2] + number[3]);

    // Else print that no number was found
    else console.log('No number found');
});
