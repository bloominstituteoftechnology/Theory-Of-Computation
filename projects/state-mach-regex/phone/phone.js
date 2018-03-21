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
	
	// Find matches
	const matches = line.match(/\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/);
	
	// If match found, print number with no spaces, parens, or dashes
	if (matches) {
	console.log(`${matches[1]}${matches[2]}${matches[3]}`);
	} else {
	console.log("No phone number found");
	}
	
	// Else print that no number was found
	});
