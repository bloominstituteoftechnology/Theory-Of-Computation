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
    const regQuery = /(\(?[0-9]){3}\)?\ ?\-?([0-9]){3}\ ?\-?([0-9]){3}\d+/g;
    const regex = new RegExp(regQuery);
    // Find matches
    let experiment = line.match(regex);
    let manipulation = experiment[0];
    if (experiment.length > 1) {
      tempString = '';
      for (let i = 0; experiment.length > i; i++) {
        console.log("looping")
        tempString += experiment[i];
      }
      manipulation = tempString;
    }
    manipulation = parseInt(manipulation, 10);
    const arrNumber = manipulation.toString(10).replace(/\D/g, '0').split('').map(Number);
    let object = {};
    let area = '';
    let prefix = '';
    let suffix = '';
    let newArr = [];
    if (arrNumber.length > 10) {
      for (let i = 0; arrNumber.length > i; i++) {
        if (arrNumber[i] !== 0 <= 9) {
          console.log("Not in range of 1 to 10", arrNumber[i])
        }
      }
    }
    for (let i = 0; arrNumber.length > i; i++) {
      if (i <= 2) {
        area += arrNumber[i]
      } else if (i <= 5) {
        prefix += arrNumber[i]
      } else {
        suffix += arrNumber[i]
      }
    }
    object = {
      "Area code: ": parseInt(area, 10),
      "Prefix: ": parseInt(prefix, 10),
      "Suffix: ": parseInt(suffix, 10)
    }
    // If match found, print number with no spaces, parens, or dashes
    console.log(object, arrNumber.length, experiment.length)
    // Else print that no number was found
});
