const fs = require('fs');


const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

fs.readFile("stackoverflow.html", 'utf8', function (err, data) {
    if(err) {
        return console.log(err)
    }
    // console.log(data.match(/\http+.*?\.com/g))
    console.log(data.match(/\http:+.*?\'/g))
    console.log(data.match(/\http:+.*?\'/g).length)
    console.log(data.match(/\http:+.*?\"/g))
    console.log(data.match(/\http:+.*?\"/g).length)
    console.log(data.match(/\https:+.*?\'/g))
    console.log(data.match(/\https:+.*?\'/g).length)
    console.log(data.match(/\https:+.*?\"/g))
    console.log(data.match(/\https:+.*?\"/g).length)
    // console.log(data.match(/\http+.*?\'/g))
    // console.log(data.match(/\http+.*?\.com/g))
    // console.log(data.match(/\href+.*/g))
});
// !!!! IMPLEMENT ME

// Read file

// Set up regex

// Find matches

// Print all matches
