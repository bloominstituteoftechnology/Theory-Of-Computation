fs = require('fs');
hash = require('./HashTable');
fs.readFile('./BananaScript.bnf', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  const transpiler = {};
  let temp;
  const lines = data.split('\n');
  lines.forEach((line, i) => {
    const key = line.split(':=')[0].trim();
    const value = line.split(':=')[1];
    if (!value) transpiler[temp] = key;
    else {
      transpiler[key] = value;
      temp = key;
    }
  });
  console.log(transpiler);
});