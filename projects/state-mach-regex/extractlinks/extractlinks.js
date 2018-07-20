const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
// Set up regex
    const urlRegex = new RegExp(/http.+?\:\/+?[^"']+/g);
// Find matches
    const urls = data.match(urlRegex);
// Print all matches
    urls.forEach(url => {
        console.log(url);
    });
});
