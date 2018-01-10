const fs = require('fs');

const file = process.argv[2];

file
  ? fs.readFile(file, 'utf8', (err, data) => {
      if (err) console.error(`error: no such file '${file}'`);
      else
        data
          .match(/https?:\/\/[^'"]+\.[^'"]+/g)
          .forEach(url => console.log(url));
    })
  : console.error('usage: extractlinks inputfile');
