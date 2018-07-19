var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin

rl.on('line', function (line) {

  // !!!! IMPLEMENT ME
  // Come up with the phone regex
  let reg = /[\W1]?(\d{3})[\W]?[\W]?(\d{3})[\W]?[\W]?[\W]?(\d+)/;
  // Find matches  
  let extracted = line.match(reg);
  if (extracted !== null) {
    console.log(`Area Code:\t${extracted[1]}\nPrefix:\t\t${extracted[2]}\nSuffix:\t\t${extracted[3]}`);
  } else {
    console.log(`No USA Format Phone Number Found`);
  }
});
