const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const fileToRead = fs.readFileSync('./stackoverflow.html').toString();

// Set up regex
const urlRegex = /https?:\/\/[\w\d\.\/\?\=\@\:\-\&\%\;]{2,256}/g;

// Find matches
const urlLinks = fileToRead.match(urlRegex);

// Print all matches
console.log(urlLinks)
