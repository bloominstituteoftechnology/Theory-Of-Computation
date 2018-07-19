const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file

// Set up regex

// Find matches

// Print all matches
const read = fs.readFileSync(filename, {encoding: 'utf8'});
const regex = /https?:\/\/[^\\'">)\s]+?\.[^\\'">)\s]+/g;
const matches = read.match(regex);

matches.forEach(match => {
    console.log(match);
})
