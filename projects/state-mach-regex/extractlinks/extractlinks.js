const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const readfile = rs.readfile(`./${filename}`, (err, data) => {
    data = String(data)

// Set up regex
const findLinks = new RegExp(/http[s]?.*?(?=")/g);

// Find matches

const matches = data.match(findLinks)

// Print all matches
    return matches;
})
