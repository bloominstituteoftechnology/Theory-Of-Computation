const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];
// Read file
file = fs.readFileSync(filename, 'utf8')
// Set up regex
const reg  = /https?\:\/\/[^\\'">\s]+/g;

// console.log(file)

// Find matches
const matches = file.match(reg);
// Print all matches

for (let url of matches){
    console.log(url)
}
