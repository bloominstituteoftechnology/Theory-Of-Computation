const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

const filedata = fs.readFileSync(filename, {encoding: 'utf8'});

const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

const matches = filedata.match(regex);

for (let url of matches) {
    console.log(url);
}