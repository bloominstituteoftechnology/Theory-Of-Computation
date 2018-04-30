const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const loadedFile = fs.readFileSync(filename, {encoding: 'utf8'});

// Set up regex
const regex = /https?:\/\/[^\\"'>/$.?#\s].[^\\"'>()\s]+/ig;

// Find matches
const matches = loadedFile.match(regex);

// Print all matches
for (let link of matches) {
    console.log(link);
}