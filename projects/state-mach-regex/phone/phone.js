var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

console.log("Enter a 10 digit phone number please")

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    let phoneregex = /\(?(\d{3})\)?.?(\d{3}).?(\d{4})/im

    // Find matches
    const number = line.match(phoneregex)

    // If match found, print number with no spaces, parens, or dashes

    if(number){
      console.log("Area Code:", number[1])
      console.log("Prefix:", number[2])
      console.log("Suffix:", number[3])
    }

    // Else print that no number was found
    else{
      console.log("Sorry number could not be found")
    }
});
