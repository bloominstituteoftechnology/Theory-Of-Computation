const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/; // const regex = /(\d{10})|((\()?(\d{3}\) )|(\d{3}[- ]))(\d{3}[- ])(\d{4})/;

rl.prompt();

rl.on('line', line => {
  const match = line.match(regex);
  
  if (match) {
    console.log(`Area code: ${match[1]} \nPrefix: ${match[2]} \nSuffix: ${match[3]}`);
  } else {
    console.log("Not a phone number.");
  }

  rl.close();
});