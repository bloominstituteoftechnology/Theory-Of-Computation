var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    const regex = /^\+?[0-9\/.()-]{9,}$/igm

    let match = line.match(regex);
    let result = line.replace(/[- )(]/igm,'');

    if (result.length === 10){
      console.log(result);
    } else {
      console.log("Not a Phone Number");
    }
});
