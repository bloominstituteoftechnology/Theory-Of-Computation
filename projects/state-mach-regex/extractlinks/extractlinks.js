const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const htmlFile = fs.readFileSync(filename).toString();

// Set up regex
const links = htmlFile.match(/(href.+?\>)/g);

// Find matches
const urls = []
links.forEach(link => {
    let url = link.match(/(https?:\/\/.+?\")/g);
    if (url) {
        url = url[0].slice(0, url[0].length - 1);
        urls.push(url);
    }
})

// Print all matches
console.log(urls);