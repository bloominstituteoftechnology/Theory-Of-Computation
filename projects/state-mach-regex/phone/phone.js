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
    let phoneRegex = /\(?(\d{3})\)?-?(\d{3})-?(\d{4})/g
    // Find matches
    let matchedPhone = phoneRegex.exec(line)
    
    // If match found, print number with no spaces, parens, or dashes
    if (matchedPhone) {
      // console.log(matchedPhone.length);
      console.log(`Area Code: ${matchedPhone[1]}`)
      console.log(`Prefix: ${matchedPhone[2]}`)
      console.log(`Suffix: ${matchedPhone[3]}`)
    }
    // Else print that no number was found
    else {
      console.log("No number found.")
    }
});
