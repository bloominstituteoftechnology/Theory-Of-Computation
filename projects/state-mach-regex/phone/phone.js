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
  let phone = new RegExp(/(\d{3}).*(\d{3}).*(\d{4})/, 'i');
  let number = new RegExp(/\d/, 'i');

  // Find matches
  // If match found, print number with no spaces, parens, or dashes
  if (line.match(phone)) {
    line = line.match(phone)[0]
      .split('')
      .filter(c => number.test(c))
      .join('');
    console.log(line);
  }
  // Else print that no number was found
  else 
    console.log('No valid phone number was found');


});
