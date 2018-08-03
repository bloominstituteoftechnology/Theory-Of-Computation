const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// This code reads a line at a time from stdin

// Match on 0 or 1 opening parens
// Match on three digits
// Match on 0 or 1 closing parens
// Match on 0 or more spaces
// Match on 0 or 1 dashes
// Match on 3 digits
// Match on 0 or more spaces
// Match on 0 or 1 dashes
// Match on 4 digits
const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;

rl.on("line", function (line) {
    // IMPLEMENT ME !!!

    // Come up with the phone regex
    const matches = line.match(regex);

    // If match found, print number with no spaces, parens, or dashes
    if (!matches) {
        console.log("No number found");
    } else {
        console.log(`Area code: ${matches[1]}\nPrefix: ${matches[2]}\nSuffix: ${matches[3]}`)
    }
});