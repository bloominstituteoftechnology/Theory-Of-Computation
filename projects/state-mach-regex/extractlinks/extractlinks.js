const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// -------------
//  Read file

const readFilename = fs.readFileSync(filename);

// Set up regex

const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

// ? (Quantifier. Match between 0 and 1 of preceding token)
// : (Character. Matches a ":" character)
// \/ (Escaped Character. Matches a "/")
// [^ (Negated set. Match any charachter that is not in the set)
//     \\ (Escaped character)
//     ', ", >, (characters)
//     \s (Whitespace - Matches any whitespace character(spaces, tabs, line breaks)
// ]
// + (Quantifier. Match 1 or more of the preceding token)
// ? (Lazy. Makes the preceding quantifier lazy, causing it to match as few characters as possible)
// \. (Escaped character. Matches a "." character)
// [^] (Negated set)

// Find matches

const matches = readFileName.match(regex);

// Print all matches

for (let address of matches) {
    console.log(address);
}