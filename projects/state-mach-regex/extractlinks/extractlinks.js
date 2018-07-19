const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
	console.error("usage: extractlinks inputfile");
	process.exit(1);
}

const filename = args[0];
console.log(`file name is ${filename}`);
// !!!! IMPLEMENT ME
const data = fs.readFileSync("../../../stackoverflow.html");
console.log(`data ${data}`);
// Read file

// Set up regex

// Find matches

// Print all matches
