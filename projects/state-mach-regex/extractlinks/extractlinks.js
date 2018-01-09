const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const data = fs.readFileSync(filename, 'utf8');

// Set up regex

// match anything up to the terminating quotation mark. Must have a . character somewhere in the middle
// to avoid matching the dynamically generated URLS
const urlRegex = /https?:\/\/[^'"]+\.[^'"]+/g;

// Find matches
const matches = data.match(urlRegex);
console.log(matches.length);

// Print all matches
for (const url of matches) {
  console.log(url);
}