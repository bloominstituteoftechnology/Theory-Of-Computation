var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin
const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;
rl.on('line', function (line) {

  // !!!! IMPLEMENT ME
  const matched = line.match(regex);
  if (matched === null) {
    console.log('Phone number not found');
  } else {
    console.log(`${matched[1]}${matched[2]}${matched[3]}`);
  }
});

