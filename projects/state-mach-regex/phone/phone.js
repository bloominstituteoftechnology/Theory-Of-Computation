var readline = require("readline");

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

// This code reads a line at a time from stdin

rl.on("line", function(line) {
	// Come up with the phone regex
	const regex = /\(?(\d{3})\)?\s*-?(\d{3})\s*-?(\d{4})/;
	// Find matches
	const matches = line.match(regex);
	// If match found, print number with no spaces, parens, or dashes
	if (matches) {
		console.log(
			`Aread code: ${matches[1]}\n Prefix: ${matches[2]}\n Suffix: ${
				matches[3]
			}`
		);
	} else {
		// matches is null
		// Else print that no number was found
		console.log("no number was found");
	}
});
