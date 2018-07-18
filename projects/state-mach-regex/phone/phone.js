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

		const phoneNumMask = /(\d\d\d).*(\d\d\d).*(\d\d\d\d)/

    // Find matches

		const formattedNum = phoneNumMask.exec(line);

    // If match found, print number with no spaces, parens, or dashes
    if (formattedNum) console.log(`${formattedNum[1]}${formattedNum[2]}${formattedNum[3]}`);
		else {
		  console.log("Couldn't parse a phone number out of that string.");
		 };
    // Else print that no number was found
});
