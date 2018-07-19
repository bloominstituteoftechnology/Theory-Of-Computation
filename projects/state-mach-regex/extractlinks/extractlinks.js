const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const data = fs.readFileSync(filename, {encoding: "UTF-8"})


// Set up regex
const regex = new RegExp(/\bhttps?:\/\/\S+/g)


//  const match = data.match(regex);

const links = data.match(regex)
 console.log(links)



