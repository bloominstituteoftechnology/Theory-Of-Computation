const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

//read in the file data
const filedata = fs.readFileSync(filename, { encoding: 'utf8' });
console.log(filedata);

/*
https? -- Match on http or https
:\/\/ -- Match on "://" using \ to escape the backslashes
[^\\’“\s]+? -- Match 1 or more on any character NOT in this set, lazily
\. -- Match on the period
[^\\’“>\s]+ -- Match 1 or more on any character NOT in this set, greedily
*/

// Set up regex
const regex = /https?:\/\/[^\\’“\s]+?\.[^\\’“>\s]+/g;

// Find matches
const matches = filedata.match(reges);

// Print all matches
for (let url of matches) {
    console.log(url);
}

console.log(matches.length);
