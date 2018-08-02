const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

const filedata = fs.readFileSync(filename, {encoding: 'utf8'});

/*
https? -- Matches for the exact string "http" with 0 to 1 "s"es.
:\/\/ -- Matches for "://". Backslashes are need to match on literal slashes.
[^\\'">\s]+? -- Match 1 or more of anything NOT in the set, in this case \, ', ", >, and spaces
                These are the only things not allowed in a link body.
                ? makes this quantifier lazy to match as few characters as possible
\. -- Matches on a period literal.
[^\\'">\s]+ -- Same as the previous quantifier, only it doesn't match lazily since we want to reach the end of the string.
*/
const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

const matches = filedata.match(regex);

for (let url of matches) {
    console.log(url);
}