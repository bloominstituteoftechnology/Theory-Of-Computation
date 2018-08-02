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
const file = fs.readFileSync(filename).toString('utf-8');
const regex = /https?:\/\/[^\\'"<>\s]+?\.[^\\'"<>\s]+/g;

const matches = file.match(regex);
console.log(matches);
for(let webaddress of matches) {
    console.log(webaddress);
}