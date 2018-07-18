const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const reader = fs.readFileSync(filename, 'utf8');

// Set up regex
const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

// Find matches
const matches = reader.match(regex);
// Print all matches

for (let url of matches) {
    console.log(url);
}


