const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
    const data = fs.readFileSync(filename, "utf8");
    const lines = data.trim().split(/[\r\n]+/g);

// Set up regex
const regx = /(https?:\/\/)([www\.])?([\w@:%\._-]+)(\.[\w]+)([\w@:?&;=%\._\-//]+)/g

// Find matches
const matches = [];

lines.forEach(line => {
    if (line.match(regx) !== null) matches.push(line.match(regx))
})

// Print all matches
matches.forEach(match => {
    console.log(match[0]);
})