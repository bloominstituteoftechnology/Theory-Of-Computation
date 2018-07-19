const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
	console.error("usage: extractlinks inputfile");
	process.exit(1);
}

const filename = args[0];
console.log(`file name is ${filename}`);

// Read file
const data = fs.readFileSync("../../../stackoverflow.html");
console.log(`data ${data}`);
const str = data.toString();
console.log(`type of data is ${typeof str}`);
// Set up regex
const regex = /(https|http):\/\/(\w+.)+/g; // regex representation of urls
// Find matches
const matches = str.match(regex); // holds all matches found with regex in stackoverflow.html
console.log(`matches ${matches}`);
console.log(`number of matches is ${matches.length}`);
// Print all matches
