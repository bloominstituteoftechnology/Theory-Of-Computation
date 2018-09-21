const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME
// Read file
fs.readFile(filename, "utf8", function read(err, data) {
    if (err) {
        throw err;
    }
    const http = data.match(/((http:\/\/|https:\/\/).*?)"/g).map(h => h.replace(/\"/g, ""))
    const path = data.match(/((href=")(?!http).*?)"/g).map(p => p.replace(/href=/g, "").replace(/\"/g, ""))

    console.log(http.length)
    console.log(path.length)

});

// Set up regex
// Find matches

// Print all matches
