var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin
rl.on('line', function(line) {
  if (line.match(/\(*?\d{3}[)\- ]*?\d{3}[\- ]*?\d{4}/g)) {
    const phoneNumber = line.replace(/[- \()]/g, '');
    console.log(`\nArea code: ${
      phoneNumber.substring(0, 3)
    }\nPrefix: ${
      phoneNumber.substring(3, 6)
    }\nSuffix: ${
      phoneNumber.substring(6)
    }\n`);
  } else {
    console.log('Error: Invalid phone number format\n');
  }
});
