const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

function urlCheck(str) {
  const regex = /"https?:\/\/[^\s",]+\.[^\s",]+(\.[^\s",]+)?"/gi;
  const matches = str.match(regex);
  matches.forEach(val => {
    const temp = val.substring(1, val.length - 1);
    console.log(temp);
  });
}

fs.readFile(filename, "utf8", (err, data) => {
  urlCheck(data);
});
