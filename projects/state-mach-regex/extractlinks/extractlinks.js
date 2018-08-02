const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

const data = fs.readFileSync(filename, {encoding: 'utf8'});

const regex = /https?: \/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

const matched = filedata.match(regex);

for (let url of matched) {
    console.log(url);
}
// !!!! IMPLEMENT ME

// Read file

// Set up regex

// Find matches

// Print all matches
