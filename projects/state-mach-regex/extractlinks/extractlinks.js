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
const str = data.toString();
// Set up regex
// \b([-a-zA-Z0-9@:%_\+.~#?&//=]*) refers to a group of chars preceeded by a non word char such as a '/'
const regex = /(https|http):\/\/([\w\-]{2,256})\b([\w@:%._\+~#?&\/=-]*)/g; // regex representation of urls
// Find matches
const matches = str.match(regex); // holds all matches found with regex in stackoverflow.html

// Print all matches
matches.forEach(match => {
	console.log(`${match}\n`);
});
