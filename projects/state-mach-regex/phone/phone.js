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
    const regex = /\(?(\d{3})[^\d]*(\d{3})[^\d]*(\d{4})/
    // const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})/
    // Find matches
    const outcome = line.match(regex)
    // If match found, print number with no spaces, parens, or dashes
    if(outcome){
      console.log(`Area code: ${outcome[1]}\nPrefix: ${outcome[2]}\nSuffix: ${outcome[3]}`)
      // console.log(outcome)
    }else{
      console.log('no number found')
    }
    // Else print that no number was found
});
