const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

const regex = /(\(?\d{3}\)?) ?-?(\d{3}) ?-?(\d{4})/g;

rl.prompt();

rl.on('line', line => {
  const match = line.match(regex);
  
  if (match) {
    const digits = [...match[0]].filter(x => Number.isInteger(+x));

    const areaCode = digits.slice(0, 3).join("");
    const prefix = digits.slice(3, 6).join("");
    const suffix = digits.slice(6, 10).join("");

    console.log(`Area code: ${areaCode} \nPrefix: ${prefix} \nSuffix: ${suffix}`);
  } 
  
  else console.log("Not a phone number.");

  rl.close();
});