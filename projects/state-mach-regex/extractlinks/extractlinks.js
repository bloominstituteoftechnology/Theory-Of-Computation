const debugging = false;
const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];
const stream = debugging ? fs.createWriteStream('./urls.txt', 'utf8') : null;

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {

        console.log(`error: ${err}`);
        exit(1);
    }
    // const urlReg =  RegExp('(?:href|content)\s*\=\s*\"(https?\:\/\/[^\"]+)\"','g');
    const urlReg = RegExp('(https?\:\/\/.+?)[\,\)\'\"]', 'g');
    let match;
    while ((match = urlReg.exec(data)) !== null) {  // data.match(/(?:href|source)\s*\=\s*\"(https?\:\/\/[^\"]+)\"/g);
        console.log(match[1]);
        if (debugging)
            stream.write(match[1] + '\n');
    }
    if (debugging)
        stream.close();
});

// !!!! IMPLEMENT ME

// Read file

// Set up regex

// Find matches

// Print all matches
