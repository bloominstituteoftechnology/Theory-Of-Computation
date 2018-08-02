const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
fs.readFile(filename, 'utf8', (err, links) => {
    if (err) {
        return console.log(err)
    }
    // Set up regex
    const regex = /https?:\/\/[^\\'">\s]+/ig;
    // Find matches
    const allLinks = links.match(regex);
    // Print all matches
    // console.log(allLinks.length);
    console.log(allLinks);
})






