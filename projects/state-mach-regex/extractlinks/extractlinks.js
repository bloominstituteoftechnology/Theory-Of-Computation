const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const filedata = fs.readFileSync(filename, {encoding: 'utf8'});

// Set up regex
const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

// Find matches
const matches = filedata.match(regex);

var count = 0;
// Print all matches
for (var url of matches) {
    ++count;
    console.log(url);
}

console.log("count: ", count);