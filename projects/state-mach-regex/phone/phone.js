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
    // regex for a german mobile phone number
    // 4 digits followed by additional 8 numbers 
    // with restrictions for the first 4 numbers
    const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/
    // Find matches
    // const strippedNumber = line.replace(/\D+/g, '')
    const outcome = line.match(regex)
    // If match found, print number with no spaces, parens, or dashes
    if(outcome){
      console.log('Area Code: ', outcome[1]);
      console.log('Prefix: ', outcome[2]);
      console.log('Suffix: ', outcome[3]);
    }
    // Else print that no number was found
    else{
      console.log('No number was found', outcome);
    }
});
