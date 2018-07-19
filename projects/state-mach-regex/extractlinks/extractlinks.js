const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
fileArray = filename;
// Set up regex
const regEx = /https?:\/\/.+/;

// Find matches
matchObject = regEx.match(fileArray);

// Print all matches
print(matchObject);