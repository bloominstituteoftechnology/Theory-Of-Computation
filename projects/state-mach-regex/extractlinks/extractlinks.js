const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
let fileData = fs.readFileSync(filename).toString('utf-8');
let lines = fileData.split(/\n\r/); // Split each line of the file.
// Set up regex

let reg = /https?:\/\/[\w-\.\/\?\=\&\;\%]+/;
// starts with http
// may or may not have an s
// has :
// contains double slashes
// any combination of alphanumeric, dots, slash, ? , = , & , ; , or & all the way until we find a character otherwise.

// Find matches
results = [];
lines.forEach(item => {
    if (item.match(reg) !== null) {
        results.push(item.match(reg, "").toString().split(" ")[0]);
    }
})
// Formatting the links to be output to console
linksString = '\n______________List of Links______________\n'
results.forEach((item, index) => {
    linksString += `Link (${index + 1}):\t${item}\n`
})
// Print all matches
console.log(`${linksString}\nThere were a total of: ${results.length} links found.\nThe Expression used was: ${String(reg)}`);
