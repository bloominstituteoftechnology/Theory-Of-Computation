const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const readIt = fs.readFileSync(filename, 'utf8');

// Set up regex
const regexSetUp = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

// Find matches
const matched = readIt.match(regexSetUp);

// Print all matches
for (let url of matched) {
    console.log(url);
}
