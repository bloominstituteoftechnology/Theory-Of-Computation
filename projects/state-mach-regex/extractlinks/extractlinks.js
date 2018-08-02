const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const data = fs.readFileSync(filename, 'utf8')

// Set up regex
// looking for the string in the first part, "?" signals that the "s" in https is optional
// followed by two escaped slashed. followed by our 2 negating blocks removing "" / '' and whitespace
// global flag for obvious reasons
const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

// Find matches

const output = data.match(regex)

// Print all matches

console.log(output.length);