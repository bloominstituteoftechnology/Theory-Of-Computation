const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

const text = fs.readFileSync(filename, {encoding:"utf8"});

const regex = /("https\:([^"]|"")*")|("https\:([^']|'')*")|("http\:([^"]|"")*")|("http\:([^']|'')*")/g;

let array1;

while ((array1 = regex.exec(text)) !== null) {
    console.log(array1[0].replace(/"/g, ''));
}
