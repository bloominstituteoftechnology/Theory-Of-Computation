const fs = require('fs');

let x = 4;
const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

fs.readFile('stackoverflow.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  // const regex = /(https|http)(:\/\/)(\w+)(\.(\w+))*(\/\w+)*(\.\w+\?\w+=\w+)*(\/?)/g;
  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  const answer = data.match(regex);
  console.log(answer);
});

// !!!! IMPLEMENT ME

// Read file

// Set up regex

// Find matches

// Print all matches
