const fs = require("fs");

const args = process.argv.slice(2);

if (args.length !=1) {
    console.error("Usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// Read in the file data
const fileData = fs.readFileSync(filename, { encoding: "utf8" });

/*
https? -- Match on http or https
:\/\/ -- Match on "://" using \ to escape the backslashes
[^\\'"<>\s]+? -- Match 1 or more on any character NOT in this set, lazily
\. -- Match on the period
[^\\'"<>\s]+ -- Match 1 or more on any character NOT in this set, greedily
*/
const regex = /https?:\/\/[^\\'"<>\s]+?\.[^\\'"<>\s]+/g;

const matches = fileData.match(regex);

for (let url of matches) {
    console.log(url);
}