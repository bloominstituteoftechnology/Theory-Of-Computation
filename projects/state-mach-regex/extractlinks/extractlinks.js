const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const text = fs.readFileSync(filename, 'utf8');

// Set up regex

// Find matches
const found = text.match(urlRegex);

// Print all matches
