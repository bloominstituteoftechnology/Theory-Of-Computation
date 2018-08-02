var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin

rl.on('line', function (line) {
  let regEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/
  let brokenUp = line.match(regEx)

  if (brokenUp === null) {
    console.log('No number was found.')
  }
  else if (brokenUp != null) {
    let areaCode = brokenUp[1]
    let prefix = brokenUp[2]
    let suffix = brokenUp[3]
    console.log(`Area code: ${areaCode}\nPrefix: ${prefix}\nSuffix: ${suffix}`)
  }
});

