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
//const phoneReg = new RegExp("\(?(\d{3})\)?\s*?\-?(\d{3})\-?\s*?(/d{4})"); 
const phoneReg = new RegExp("^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$");
    // Find matches
const parse = line.match(phoneReg);
    // If match found, print number with no spaces, parens, or dashes
if (!parse){
  console.log(`The parse failed!`);
  return
} else console.log(parse);
    // Else print that no number was found
});
