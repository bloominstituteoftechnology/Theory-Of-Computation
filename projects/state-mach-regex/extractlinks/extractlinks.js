const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME
let content;

// Read file

fs.readFile('./stackoverflow.html', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    // Set up regex
    let re = /(http)\w+(:\/\/)\w+([\s\S]*?)"/g;
    // let re = new RegExp('(http)\w+(:\/\/)\w+([\s\S]*?)"', 'g');
    // Find matches
    let matched = content.match(re);

    // Print all matches
    console.log(matched);
    console.log(matched.length);
});

