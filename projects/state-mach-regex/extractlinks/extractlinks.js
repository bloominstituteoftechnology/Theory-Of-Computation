// import { read } from 'fs';

const fs = require('fs');

const args = process.argv.slice(2); //stackoverflow.html


if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file

const htmlData = fs.readFileSync(filename, 'utf8');
// Set up regex
const regex = /https?:\/\/[\w=\.\/\?\=\&\;\%]+/g;
// Find matches
const regexMatch = htmlData.match(regex);

for (let links of regexMatch) {
    console.log(links);
}

// Set up regex

// Find matchesregex
// Print all matches
