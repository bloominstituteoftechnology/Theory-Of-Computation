const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];
console.log('filename is', filename);
// !!!! IMPLEMENT ME

// Read file
let re = /https?:\/\/\S+("|')/g
fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
    if (err) throw err;
    let match = data.match(re);
    if (match) {
        match = match.map(each => console.log(each.slice(0, each.length - 1)));
    }
})

// Set up regex

// Find matches

// Print all matches
