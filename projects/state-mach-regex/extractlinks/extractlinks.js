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
    if (err) throw err;
    console.log(data);
    // Set up regex
    const re = /https?:\/\/[^"]+(?=")/g

    // Find matches
    data.split('\n')
        .map(datum => datum.match(re))
        .filter(link => link)
        .reduce((cur, acc) => cur.concat(acc))
        .forEach(link => console.log(link))
});