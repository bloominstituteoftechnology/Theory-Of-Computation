const fs = require('fs');
const file = fs.readFileSync(process.argv[2], "utf8");

console.log(
  file.match(/<(?=body).*[\w\W]*<\/body>/)[0]
    .match(/"(?=http)[\w://\.?="-]*/g)
    .map(l => l.replace(/"/g, '')
  )
);