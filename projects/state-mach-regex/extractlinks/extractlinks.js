const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// Read file
const data = fs.readFileSync(filename, 'utf8')

const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

// Find matches

const output = data.match(regex)

// Print all matches

console.log(output.length);
