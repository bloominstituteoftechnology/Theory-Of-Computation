const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const file = fs.readFileSync(filename).toString();

// Set up regex
const linkRegex = /http[s]?:[^"']+\.[^"']+/img;

// Find matches
const found = file.match(linkRegex);

// Print all matches
found.forEach(link => console.log(link));
console.log(found.length)