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
const re = /^(https?):\/\/[^\\'">\s]+?\.[^\\'">\s]+/gi;
// Find matches
const result = filedata.match(re);
// Print all matches
if (result !== null) {
    result.forEach(item => console.log(item));
} else {
// Else print that no number was found
    console.log("No result was found!")
} 