const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

    const links = data.match(regex);
    if (links == null) {
        console.log('Cannot find links.')
    } else {
        console.log(links);
    }
})



// Set up regex

// Find matches

// Print all matches
