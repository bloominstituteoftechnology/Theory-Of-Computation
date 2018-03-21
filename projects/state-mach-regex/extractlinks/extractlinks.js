var fs = require("fs");
const regex = /("https\:([^"]|)*")|("https\:([^']|'')*")|("http\:([^"]|"")*")|("http\:([^']|'')*")/g;

var text = fs.readFileSync("./projects/state-mach-regex/extractlinks/stackoverflow.html", "utf-8");

var found = text.match(regex);

for (var i = 0; i < found.length; i++) {
    found[i] = found[i].replace(/"/g, "");
}

console.log(found);