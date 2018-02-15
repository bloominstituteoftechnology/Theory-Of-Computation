var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let validNumbers = [];

rl.on('line', function (line) {
  const regex = /([0-9])\w+/g;
  var found = line.match(regex);
  if (found !== null) {
    console.log(`The phone number is ${line}`);
    rl.close();
  } else {
    console.log("No Number was found");
  }
});
