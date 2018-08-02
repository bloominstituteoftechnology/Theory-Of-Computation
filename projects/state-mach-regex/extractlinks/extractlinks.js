// import ('stackoverflow.html');

const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const readFile = fs.readFileSync(filename).toString();

// Set up regex
const regex = /(http|https+)(.+)(\"{1}|\'{1})/g;
const matchedLinks = readFile.match(regex);

// (http|https+)(.+)('{1}|"{1})
// /(http|https+)(.+)("{1})/g;
// /(http|https+)(.+(?="))/g;

// Find matches
const urls = []

matchedLinks.forEach(link => {
    let url = link.match(regex);
    if (url) {
        url = url[0].slice(0, url[0].length - 1);
        urls.push(url);
    }
})
 
// Print all matches
console.log(urls);