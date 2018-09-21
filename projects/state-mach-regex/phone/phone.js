var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

  // !!!! IMPLEMENT ME
  let match = line.match(/([\d]?[-\s]?\(?([\d]{3})\)?[-\s]?([\d]{3})[-\s]?([\d]{4}))/) // [first, second, third]
  // Come up with the phone regex

  // Find matches

  // If match found, print number with no spaces, parens, or dashes
  if (match) {
    match = match[0].replace(/-|\(|\)|\s/g, '')
    let int, first, second, third
    
    if (match.length === 11) {
      int = match.substr(0, 1)
      first = match.substr(1, 3)
      second = match.substr(4, 3)
      third = match.substr(7)
    } else {
      first = match.substr(0, 3)
      second = match.substr(3, 3)
      third = match.substr(6)
    }
    
    console.log('Int Code:' + int)
    console.log('Area code: '+first)
    console.log('Prefix: '+second)
    console.log('Suffix: '+third)
  } else {
    console.log('Not a phone number: ' + line )
  }
  // Else print that no number was found


});
