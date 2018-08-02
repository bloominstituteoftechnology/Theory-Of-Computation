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
    let phoneRegex = /^[(]?(\d{3})[)]?.?(\d{3}).?(\d{4})$/im
    // Find matches
    const found = line.match(phoneRegex)
     // If match found, print number with no spaces, parens, or dashes
    
    if (found) {
      console.log('Area code: ', found[1])
      console.log('Prefix: ', found[2])
      console.log('Suffix: ', found[3])
    }
     // Else print that no number was found
    else console.log('no number was found')
});
