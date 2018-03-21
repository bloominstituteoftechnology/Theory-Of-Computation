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
    const regex = /^\+?[0-9\/.()-]{9,}$/igm

    // Find matches
    let matches = line.match(regex);
    let result = line.replace(/[- )(]/igm,'');

    // If match found, print number with no spaces, parens, or dashes
    if (result.length === 10){
      console.log(result);
      console.log(matches);
    }
    
    // Else print that no number was found
    else {
      console.log("No number found");
      console.log(matches);
    }
});
