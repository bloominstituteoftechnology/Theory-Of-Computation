var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME
    if(!line) return console.log("Where is your number?...");
    else {
	    console.log({line});
	    var regex = /\d/g;
	    var number = line.match(regex);

	    console.log(number.join(''));
    }

    // Come up with the phone regex
    // Find matches
    // If match found, print number with no spaces, parens, or dashes
    // Else print that no number was found
});
