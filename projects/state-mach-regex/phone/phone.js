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

    let r1 = /[0-9]/g;
    // let r2 = /[\(]?([0-9]{3})[\)]?[- ]?([0-9]{3})[ -]?([0-9]{4})/g
    // Find matches
    let result = line.match(r1).join('');
    // let result = line.match(r2);
    // If match found, print number with no spaces, parens, or dashes
    if(result.length === 10){
    	console.log(result);
    }else{
    	console.log('No number was found');
    }
    // Else print that no number was found
});
