const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const contents = fs.readFileSync(filename, 'utf8');

// Set up regex
const reg = /https?:\/\/(www\.)?[\w-]+\.[a-z]+(\/\w+)*([^"']*)/g;

// Find matches
const matches = contents.match(reg);

// Print all matches
matches.forEach(url => console.log(url));
console.log(matches.length);