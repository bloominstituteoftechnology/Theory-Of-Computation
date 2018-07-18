const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

const file = fs.readFileSync(filename, 'utf8');

const mask = /href\=\".*?\"/g;

let match = mask.exec(file);

while (match !== null) {

   console.log(`${match}\n`);

   match = mask.exec(file);

}

// Read file

// Set up regex

// Find matches

// Print all matches

while (match !== null) {
	console.log(match[1]);
	match = regex.exec(file);
}
