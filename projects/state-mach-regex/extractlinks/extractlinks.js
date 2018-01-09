const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]+\.\w+\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

// Read file
fs.readFile(`${__dirname}/${filename}`, "utf8", (err, content) => {
  if (err) {
    return console.error(err);
  }
  const links = content.match(re);

  if (!links) {
    return console.log("No links found");
  }

  links.forEach(link => console.log(link));
});
