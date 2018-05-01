const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) return console.log(err);
    printMatches(findMatches(data));
  });
  
// Set up regex
const search = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]+\.[a-z]+([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

// Find matches
const findMatches = data => {
    return data.match(search);
}

// Print all matches
const printMatches = matches => {
    matches.forEach(link => {
        console.log(link);
    })
}