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


  phone = /\({0,1}(\d{3})\){0,1}-{0,1}\s{0,1}(\d{3})-{0,1}\s{0,1}(\d{4})/g

  // Find matches

  results = phone.exec(line)


  // If match found, print number with no spaces, parens, or dashes

  if (results) {
    console.log(results[1] + results[2] + results[3])
  }

  // Else print that no number was found

  else {
    console.log("No phone number found.")
  }
});
