const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const file = fs.readFileSync(filename, { encoding: 'utf8' });
// const readFile = fs.readFileSync(filename).toString();

// Set up regex
//http and https
// ://
// body of url
// top-level
// the fiddly bits

/*
https? - Match on http or https
:\/\ - Match on "://" using \ to escape the backslashes
[^\\'"<>\s]+? -- Match 1 or more on any character NOT in this set, lazily
\. -- Match on the period
[^\\'"<>\s]+ -- Match 1 or more on any character NOY in this set, greedily
*/

const regex = /https?:\/\/[^\\'"<>\s]+?\.[^\\'"<>\s]+/g;

const matchedLinks = file.match(regex);

// const regex = /(http|https+)(.+)(\"{1}|\'{1})/g;
// (http|https+).+(\"{1}|\'{1})
// const matchedLinks = readFile.match(regex);


// Find matches

for (let url of matchedLinks) {
    console.log(url);
}

// const urls = []

// matchedLinks.forEach(link => {
//     let url = link.match(regex);
//     if (url) {
//         url = url[0].slice(0, url[0].length - 1);
//         urls.push(url);
//     }
// })
 
// Print all matches
// console.log(matchedLinks.length);