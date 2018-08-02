const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0]; // argv[0] will be the path to node itself, and the second item (argv[1]) will be the path to your script code.

// !!!! IMPLEMENT ME

// Read file
fs.readFile(filename, 'utf8', (err, links) => {
    if (err) {
        return console.log(err)
    }
    // Set up regex
    // between [ ] exclusive these charecters which invalid in url, match 1 or more
    const regex = /https?:\/\/[^\\'"<>\s]+?\.[^\\'"<>\s]+/ig;
    // Find matches
    const allLinks = links.match(regex);
    // Print all matches
    // console.log(allLinks.length);
    console.log(allLinks);
})






