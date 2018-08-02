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
const urlRegex = /http[s]?\:\/\/\w+\.?/g 
// Find matches
const found = data.match(urlRegex)
// Print all matches

// console.log(found.length)

const foundModified = found.map(item => item.substring(1, url.length))
console.log(foundModified)