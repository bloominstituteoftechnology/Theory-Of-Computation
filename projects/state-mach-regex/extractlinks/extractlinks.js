const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const readFile = fs.readFile(`./${ filename }`, (err, data) => {
  data = String(data);
  
  if (err) {
    console.log('err');
  }

  // Set up regex
  // const findLinksRegExp = new RegExp(/(?:href=["'])(http[s]?.+?)(?:["'])/g);
  const findLinksRegExp = new RegExp(/http[s]?.*?(?=")/g);

  // Find matches
  const matches = data.match(findLinksRegExp);

  console.log(matches)

  // Print all matches
  // for (match of matches) {
  //   match = match.replace(/href="/, '');
  //   match = match.replace(/"/, '');
  //   console.log(match)
  // }
  

  return data
});




