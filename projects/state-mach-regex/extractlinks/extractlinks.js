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
    if (err) {
        throw err;
    }
    processFile(data);
    // console.log('data: ', data);
})

function processFile(data) {
    // Set up regex
    const regStr = /(http|https)?:\/\/[a-zA-Z0-9.\/-]+[\.][a-zA-Z0-9.\/-]+/g;

    // // Find matches
    const matchedStr = data.match(regStr);

    // // Print all matches
    console.log('matchedStr: ', matchedStr);
}