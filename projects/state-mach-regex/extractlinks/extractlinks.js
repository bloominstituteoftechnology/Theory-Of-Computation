const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];
const regex = /(https?:\/\/)([^'"\s]+)/g;

// ASYNCHRONOUS
fs.readFile(filename, "utf8", (err, data) => data.match(regex).forEach(x => console.log(x)));

// SYNCHRONOUS
fs.readFileSync(filename, "utf8").match(regex).forEach(url => console.log(url));