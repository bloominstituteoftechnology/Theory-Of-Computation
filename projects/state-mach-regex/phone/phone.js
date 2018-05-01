var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {
	if (RegExp(/(-|\)|\s)/g).test(line) === true) {
		if (line.match(/\b\d{3}\b/g).length === 2 &&
				RegExp(/\b\d{4}$/g).test(line) === true &&
				line.match(/\b\d{4,}/g).length === 1) {
					console.log(line.match(/\b\d{3}\b/g).join('') + line.match(/\b\d{4}$/gm));
		} else {
			console.log("No number was found");
		}
	} else if (RegExp(/^\d{10}$/g).test(line) === true) {
		console.log(line.match(/\b\d{10}$/g)[0]);
	} else {
		console.log("No number was found")
	}
});
