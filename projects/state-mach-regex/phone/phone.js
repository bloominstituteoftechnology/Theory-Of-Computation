var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

  // !!!! IMPLEMENT ME

  // Come up with the phone regex
  // Find matches
  const matches = line.match(/(\d{3,})/g);
  const phoneNumberStructure = {
    1: 'Area code: ',
    2: 'Prefix: ',
    3: 'Suffix: '
  };

  // if there are no matches then return there are no matches found
  if (!matches)
    return console.log('\nNo number was found');
  
  // if only one match was found we need to split the match into three parts
  // this is for phone numbers formatted like `5551234567`
  if (matches.length === 1) {
    matches[0] = matches[0].match(/(\d{3})(\d{3})(\d+)/);

    for (let i = 1; i < 4; i++) {
      phoneNumberStructure[ i ] += matches[0][i];
    }
  }
  // for all other formats we can do the same process for each match
  // (555) 123-4567 || 555-123-4567 || 555 123 4567
  else if (matches.length > 1) {
    for (let i = 0; i < matches.length; i++) {
      phoneNumberStructure[ i + 1 ] += matches[ 0 ];
    }
  }
  
  // If match found, print number with no spaces, parens, or dashes
  for (key in phoneNumberStructure)
    console.log(phoneNumberStructure[ key ]);
});