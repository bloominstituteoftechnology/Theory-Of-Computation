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
    const myRegex = /\b\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}\b/gi;
    // Find matches
    const match = line.match(myRegex);
    // If match found, print number with no spaces, parens, or dashes
    if (match) {
    	match.forEach((number) => {
    		const result = number.replace(/[()\s-]+/g, '');
    		console.log(result);
    	});
    } else {
    	// Else print that no number was found
    	console.log("No number was found.");
    }
});
