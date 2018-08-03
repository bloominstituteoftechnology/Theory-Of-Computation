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
  const regex = /\(?(\d{3})\)?\s?-?\s?(\d{3})\s?-?\s?(\d{4})/
    // Find matches
  const found = line.match(regex)
    // If match found, print number with no spaces, parens, or dashes
  if (!found) {
    console.log("Please enter a valid phone number")
  } else {
    console.log(`\n...\n\nArea Code:.${found[1]} \nPrefix:....${found[2]}\nSuffix:...${found[3]}\n\n...\n`)
  }
    // Else print that no number was found
});
