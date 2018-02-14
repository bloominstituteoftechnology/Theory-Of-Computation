var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {

  regex = /(\d{3})\)?\.*-*\s*(\d{3})\.*-*\s*(\d{4})$/;

  if (regex.exec(line) !== null) {
    console.log(line.replace(/-| |\(|\)|/g, ''));
  } else console.log("Not a valid number");
});
