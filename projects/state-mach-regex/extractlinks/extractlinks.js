const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// Read file
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    // Set up regex
    const re = /https?:\/\/[^"']+(?=["'])/g

    // Find matches
    data.match(re)
        .forEach(link => console.log(link))
});