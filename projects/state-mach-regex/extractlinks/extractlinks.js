const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

//const filename = args[0];
let rawUrls = [];
const regex = /("https\:([^"]|"")*")|("https\:([^']|'')*")|("http\:([^"]|"")*")|("http\:([^']|'')*")/g;

let filename = "./projects/state-mach-regex/extractlinks/stackoverflow.html";

function start() {
  let read = fs.readFileSync(filename, "utf8")
  let found = read.match(regex);

  for (let i = 0; i < found.length; i++) {
    found[i] = found[i].replace(/"/g, "");
  }
  rawUrls = found;
  console.log(found.length);
  console.log(rawUrls);
}

start();


console.log(rawUrls);
