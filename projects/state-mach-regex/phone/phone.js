var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

// rl.on('line', function (line) {
function check(string) {
    // Come up with the phone regex
    const regEx = /[(]?([0-9]{3})[)]?.?([0-9]{3}).?([0-9]{4})/;

    // Find matches
    matchObject = regEx.exec(string);
    let areaCode = matchObject[1];
    let prefix = matchObject[2];
    let suffix = matchObject[3];

    // If match found, print number with no spaces, parens, or dashes
    if (matchObject) {
      return(matchObject[0] + 
            '\nThe area code is: ' + areaCode + 
            '\nThe prefix is: ' + prefix + 
            '\nThe suffix is: ' + suffix);
    } 
    // Else print that no number was found
    else {
      return('No number was found, please try again');
    }
  } 
// });

console.log(check('555-123-4567'))