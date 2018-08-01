var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

// This code reads a line at a time from stdin

rl.on('line', function(line) {
  // !!!! IMPLEMENT ME
  // console.log(s2);
  var s2 = ('' + line).replace(/\D/g, '');
  if (s2 === '') {
    console.log('no number was found');
    return;
  }
  var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  console.log(`Area-code ${m[1]} \n prefix ${m[2]} \n suffix ${m[3]}`);

  // Come up with the phone regex

  // Find matches

  // If match found, print number with no spaces, parens, or dashes

  // Else print that no number was found
});
