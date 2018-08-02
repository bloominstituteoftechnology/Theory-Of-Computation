var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin
rl.on('line', function(line) {
  const phoneNumber = line.match(/^\(*?(\d{3})[)\- ]*?(\d{3})[\- ]*?(\d{4})$/);
  if (phoneNumber) {
    console.log(`\nArea code: ${
      phoneNumber[1]
    }\nPrefix: ${
      phoneNumber[2]
    }\nSuffix: ${
      phoneNumber[3]
    }\n`);
  } else {
    console.log('Error: Invalid phone number format\n');
  }
});
