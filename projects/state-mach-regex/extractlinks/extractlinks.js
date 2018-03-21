const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];
const regex = /(http|https):\/\/([^\"\']{1,})/g;
// find anything with either http or https, a colon, 2 slashes(escaped), anything other than quotes, more than one time

// Read file
fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) throw err;
    const dataStr = JSON.stringify(data);
    const matches = dataStr.match(regex);
    matches.forEach(match => {
        console.log(match);
    })
})


