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
    links = /https?.+?(?=\")/g
    fs.writeFile('result', data.match(links), 'utf8', () => {
        console.log(data.match(links))
    })
});




// Set up regex

// Find matches

// Print all matches
