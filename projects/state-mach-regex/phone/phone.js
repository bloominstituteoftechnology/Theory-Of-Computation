var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

  // !!!! IMPLEMENT ME
  let match = line.match(/([+|-|\s]?[(]?([0-9]{3})[)]?[-\s]?([0-9]{3})[-\s]?([0-9]{4}))/g) // [first, second, third]
  // Come up with the phone regex

  // Find matches

  // If match found, print number with no spaces, parens, or dashes
  if (match) {
    match = match[0].replace(/-|\(|\)|\s/g, '')
    const first = match.substr(0, 3);
    const second = match.substr(3, 3);
    const third = match.substr(6);
    console.log('Area code: '+first)
    console.log('Prefix: '+second)
    console.log('Suffix: '+third)
  } else {
    console.log('Not a phone number: ' + line )
  }
  // Else print that no number was found


});
