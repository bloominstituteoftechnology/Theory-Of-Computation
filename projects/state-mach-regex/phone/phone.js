var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin
rl.on('line', (str) => {
  const regex = /1?(\s|-)?(\(?[2-9]\d{2}\)?)(\s|-)?\d{3}(\s|-)?\d{4}/;
  const test = regex.test(str);
  if (test) {
    const regexNum = /[0-9]/;
    let final = '';
    for (let i = 0; i < str.length; i++) {
      if (regexNum.test(str[i])) {
        final += str[i];
      }
    }
    console.log(final);
  } else {
    console.log('There was no match found');
  }
});
