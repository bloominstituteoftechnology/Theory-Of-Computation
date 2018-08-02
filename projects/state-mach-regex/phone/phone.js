var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

// This code reads a line at a time from stdin

rl.on('line', function(line) {
  // !!!! IMPLEMENT ME

  // Come up with the phone regex
  const regx = /(\d+)/gi;
  // Find matches
  const matches = line.match(regx);

  // If match found, print number with no spaces, parens, or dashes

  if (matches) {
    switch (matches.length) {
      case 1:
        const number = matches[0];
        console.log(`
        Area code:\t${number.slice(0, 4)}
        Prefix:\t${number.slice(4, 7)}
        Sufix:\t${number.slice(7)}
        `);
        break;
      case 3:
        console.log(matches);
        console.log(`
        Area code:\t${matches[0]}
        Prefix:\t\t${matches[1]}
        Sufix:\t\t${matches[2]}
        `);
    }
  } else {
    console.log('No number was found');
  }

  // Else print that no number was found
});
