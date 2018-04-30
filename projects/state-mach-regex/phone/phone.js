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
  phone = new RegExp(/(\d{3}).+(\d{3}).(\d{4})/, 'i');

  // Find matches
  if (line.match(phone)) {
    // console.log(line.match(phone)[0]);
    line = line.match(phone)[0].split(/[^\d]/);
    number = line[0].concat(line[1], line[2]);
    // number = number.concat(number[0], number[1], number[2]);
    console.log(number);
  } else {
    console.log('No valid phone number was found');
  }

  // If match found, print number with no spaces, parens, or dashes

  // Else print that no number was found
});
