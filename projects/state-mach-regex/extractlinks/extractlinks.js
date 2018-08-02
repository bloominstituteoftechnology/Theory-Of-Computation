const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME
fs.readFile(filename, 'utf8', (err, data) => {
    console.log(data)
    if (err) throw err;

    const regex = /https?:\/\/(\w)*\.(\w*\/?\w*\.?\??\=?)*/g

    const links = data.match(regex)

    if (links === null) {
        console.log('Cannot retrieve links')
    } else {

        console.log(links)
    }
})
// Read file

// Set up regex

// Find matches

// Print all matches
