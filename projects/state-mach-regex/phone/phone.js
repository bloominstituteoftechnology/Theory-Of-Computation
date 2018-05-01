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

    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
    const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;
    const matches = line.match(regex);

    if(matches === null) {
      console.log("No number found");
    } else {
      console.log(`${matches[1]}${matches[2]}${matches[3]}`);
    }


    // const regExp = /\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/;
    // const match = line.match(regExp);

    // if (match !== null) {
    //   console.log(`${match[1]}${match[2]}${match[3]}`);
    // } else {
    //   console.log('Bad phone number Format');
    // }
});
