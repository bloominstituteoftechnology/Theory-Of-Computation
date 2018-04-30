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
  let reg = /\d? ?(\d{3}).?\s?(\d{3}).?(\d{4})/
  let msg;
  if (line.match(reg)) msg = line.match(reg).slice(1, 4).join('');
  else msg = "no valid number was found";
  console.log(msg); 
  
    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
