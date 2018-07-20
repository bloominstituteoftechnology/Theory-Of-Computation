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
    const regQuery = /\(?([0-9]{3})\)?\s?[\-]?([0-9]{3})\s?[\-]?([0-9]{4})/;
    const inqueryRegex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;
    const regex = new RegExp(regQuery);
  
    // Find matches
    let experiment = line.match(regex);
    let object = {};
    
    object = {
      "Area code: ": parseInt(experiment[1], 10),
      "Prefix: ": parseInt(experiment[2], 10),
      "Suffix: ": parseInt(experiment[3], 10)
    }
    // If match found, print number with no spaces, parens, or dashes
    console.log(object)
    // Else print that no number was found
});
