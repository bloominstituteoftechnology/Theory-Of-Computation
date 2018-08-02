const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const data = fs.readFileSync(filename, {encoding: 'utf8'});
// Set up regex
const regex = /https?:\/\/[^\\><'"\s]+?\.[^\\><"'\s]+/g;
// Find matches
const found = data.match(regex);
// Print all matches
for (let i = 0; i < found.length; i++) {
    console.log(found[i])
}