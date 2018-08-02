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
    const regex = /\(?\d{3}\)?[\s*-]?\d{3}[\s*-]?\d{4}/g;

    const phones = line.match(regex);
    if(phones){
      let phone = phones[0].replace(/[\()\s*-]/g, '')
      console.log('Area code: ', phone.slice(0, 3))
      console.log('Prefix:    ',phone.slice(3, 6))
      console.log('Suffix:    ',phone.slice(6, 10))
    }
    else
      console.log('Not a valid phone number')
    
});
