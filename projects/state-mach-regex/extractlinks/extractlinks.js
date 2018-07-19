const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const file = args[0];

const data = fs.readFileSync(file, {encoding: 'utf8'});

const matches = data.match(/https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g);

for (let url of matches) {
    console.log(url);
}