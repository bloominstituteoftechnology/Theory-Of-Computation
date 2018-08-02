var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin
rl.on('line', function (line) {
  const regex = /((1-)?(\(?\d{3}\)?)(?:|-|\s)?(\d{3})(?:-|\s)?(\d{4}))/
  const matched = line.match(regex);
  if(matched !== null){
    console.log(`Country Code: \t${matched[2]|| `1-`}\nArea Code:\t${matched[3]}\nPrefix:\t\t${matched[4]}\nSuffix:\t\t${matched[5]}`)
    } else {
      console.error("US Phone Number not found!");
    }
  });
  
    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
