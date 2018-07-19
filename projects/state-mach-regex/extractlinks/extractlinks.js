const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const readFile = fs.readFileSync(filename, "utf8");

// Set up regex
const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

// Find matches
const match = readFile.match(regex);

// Print all matches

for (let links of match) {
  console.log(match);
}


// node extractlinks.js stackoverflow.html