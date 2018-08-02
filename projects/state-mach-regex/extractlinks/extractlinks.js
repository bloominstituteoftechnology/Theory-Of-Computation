const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    const regex = /https?:\/\/(\w)+\-?(\w)+\.(\w*\/?\w*\.?\??\=?\-?&?;?%?)*/g
    // http, zero or 1 s, a colon, two forward slashes,
    // one or more instances of an alphanumeric character
    // zero or one instance of hyphen
    // one or more instances of an alphanumeric character
    // a period
    // Capture group start {
    // 0 or more alphanumerical characters
    // zero or one periods
    // zero or one question marks
    // zero or one equal sign
    // zero or one hyphen
    // zero or one ampersand
    // zero or one semicolon
    // zero or one percentage sign
    // } capture group ends
    // zero or more instances of the capture group

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
