import { link } from 'fs/promises';
import { linkSync } from 'fs';

const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file

fs.readFile('filename', 'utf8', (err, data) => {
    if (err) {
        throw err;
    } else {
        findMatch(data);
    }
});

// Set up regex

const regexUrl = /(http|https):\/\/\w+.+\/.+[^'"@$!~]/ig

// Find matches

const findMatch = data => {
    return data.match(readFile);
};

// Print all matches

data.forEach(links => {
    console.log(`${links.length} Matches`);
});






