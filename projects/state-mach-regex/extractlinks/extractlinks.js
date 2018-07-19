const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

// Read file 

const file = fs.readFileSync(filename, "utf8").match(regex).forEach ((line) => {
    console.log(line);
});


