var readline = require('readline');

const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
    const matches = line.match(regex);

    if (matches === null) {
        console.log("No phone number found");
    } else {
        console.log(`${matches[1]}${matches[2]}${matches[3]}`);
    }
});
