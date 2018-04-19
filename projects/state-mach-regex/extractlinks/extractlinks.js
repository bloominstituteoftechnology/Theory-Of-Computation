const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
let content;
let links;
fs.readFile(filename, function read(err, data) {
	if (err) throw err;
	content = data;
	processFile();
});
// Set up regex
const myRegex = /https?:\/\/.[^\s"']+/gi;

// Find matches
function processFile() {
	content = String(content);
	links = content.match(myRegex);

	// Print all matches
	links.forEach((e) => {
		console.log(e);
	});
}
