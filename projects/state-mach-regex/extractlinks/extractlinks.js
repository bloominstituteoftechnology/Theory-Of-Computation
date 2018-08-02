const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const filedata = fs.readFileSync(filename, 'utf8')

// Set up regex .. hint: google what constitutes valid url and exclude using ^ 
// Find matches

// http with an optional s
// ://
// body of the url
// top-level domain
// other parameters..ie. query strings, sub-navs etc
const urlRegex = /https?:\/\/[^\\'"<>\s]+?\.[^\\'"<>\s]+/g

/*
https ? -- Match http or https
:\/\ -- Match on "://" using \ to escape the backslashes
[^\\'"<>\s]+? -- Match 1 or more on any character NOT in this set, lazily
\. -- Match on the period
[^\\'"<>\s]+ -- Match 1 or more on any character NOT in this set, greedily
*/ 

const found = filedata.match(urlRegex);
// Print all matches
// for (let url of found) {
//     console.log(url)
// }

// console.log(found.length)