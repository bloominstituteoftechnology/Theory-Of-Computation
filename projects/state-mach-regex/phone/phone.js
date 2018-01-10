const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => /\(?\d{3}\)?-?\s?\.?\d{3}-?\s?\.?\d{4}/.test(line)
  ? console.log(line.match(/\d/g).reduce((a, b) => a + b))
  : console.log('Please enter a valid phone number.')
);
