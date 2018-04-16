const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const content = fs.readFileSync(filename, 'utf-8');

// Set up regex
const re = /http[^"^']*/gi;

// Find matches
const matches = content.match(re);

// Print all matches
matches.forEach(match => {
    console.log(match);
});
