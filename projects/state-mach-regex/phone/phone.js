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
    
    let reg = /\d/g;
    let number = line.match(reg);
    // Find matches
    console.log(number);

    // If match found, print number with no spaces, parens, or dashes
    if(number.length === 10) {
      console.log(`Area code: ${number[0]}${number[1]}${number[2]}`);
      console.log(`Prefix: ${number[3]}${number[4]}${number[5]}`);
      console.log(`Suffix: ${number[6]}${number[7]}${number[8]}${number[9]}`);
    } else {
      console.log("No number was found")
    }
    // Else print that no number was found
});
