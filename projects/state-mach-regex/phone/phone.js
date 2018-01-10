var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {
  // Come up with the phone regex
  // Find matches
  const match = line.match(/(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}/g);
  if (match !== null) // If match found, print number with no spaces, parens, or dashes
    match.forEach(number =>
      console.log(number.split('').reduce((strip, char) => char.match(/[0-9]/) !== null ? strip + char : strip, ''))
    );
  else // Else print that no number was found
    console.log('No number was found');
});


// const numbers = [
//   '555-123-4567',
//   '5551234567',
//   '(555) 123-4567',
//   '555 123 4567',
//   '123-123',
//   '((921-30)42-4',
//   '((555) 123-4567'
// ];


// numbers.forEach((number) => {
//   const match = number.match(/(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}/g);
//   if (match !== null)
//     match.forEach(number =>
//       console.log(number.split('').reduce((strip, char) => char.match(/[0-9]/) !== null ? strip + char : strip, ''))
//     );
// });
