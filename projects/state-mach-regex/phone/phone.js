const readline = require('readline');

/*
\(? -- Match on 0 or 1 opening parens. Backslash to escape since we're looking for a literal '('.
(\d{3}) -- Match on 3 digits. Add to capture group 1.
\)? -- Match on 0 or 1 closing parens. Backslash to escape since we're looking for a literal ')'.
\s* -- Match on 0 or more spaces.
-? -- Match or 0 or 1 dashes.
\s* -- Match on 0 or more spaces.
(\d{3}) -- Match on 3 digits. Add to capture group 2.
\s* -- Match on 0 or more spaces.
-? -- Match or 0 or 1 dashes.
\s* -- Match on 0 or more spaces.
(\d{4}) -- Match on 4 or more digits. Add to capture group 3. 
*/
const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
    const matches = line.match(regex);

    if (matches === null) {
        console.log("No phone number found");
    } else {
        console.log(`${matches[1]}${matches[2]}${matches[3]}`);
    }
});
