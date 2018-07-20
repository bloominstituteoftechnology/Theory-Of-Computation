var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

// This code reads a line at a time from stdin

rl.on('line', function(line) {
	// !!!! IMPLEMENT ME

	// Come up with the phone regex
	let reg = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;

	// Find matches
	let parse = line.match(reg);

	// If match found, print number with no spaces, parens, or dashes
	if (parse) {
		console.log('Area Code: ', `${parse[1]}`);
		console.log('Prefix: ', `${parse[2]}`);
		console.log('Suffix: ', `${parse[3]}`);
	} else {
		// Else print that no number was found
		console.log(`no phone number found`);
	}
});
