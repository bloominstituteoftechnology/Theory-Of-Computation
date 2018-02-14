const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
fs.readFile(filename, 'utf-8', function(err, data) {
    if (err) {
        throw err;
    }

    const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;;
    
    const m = data.match(regex);

    console.log(matches);
});


/**
 * let rawUrls = [];
const regex = /("https\:([^"]|"")*")|("https\:([^']|'')*")|("http\:([^"]|"")*")|("http\:([^']|'')*")/g;

let filename = "./projects/state-mach-regex/extractlinks/stackoverflow.html";

function start() {
    fs.readFile(filename, "utf8", function(err, data) {
        if (err) throw err;
        let found = data.match(regex);
        
        for (let i = 0; i < found.length; i++) {
            found[i] = found[i].replace(/"/g, "");
        }
        rawUrls = found;
        console.log(found);
        console.log(rawUrls);
    });
}
 */

// Set up regex

// Find matches

// Print all matches
