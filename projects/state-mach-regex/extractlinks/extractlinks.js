const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];
// !!!! IMPLEMENT ME

// Read file
// Potential for stretch
// let re = /https?:\/\/\S+['">]{2}.+?</g
// let re = /https?:\/\/\S+['">]{2}\w+?</g
// let re = /https?:\/\/\S+(?=['"]).+?>\w+</g
let re = /https?:\/\/\S+['"]/g
fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
    if (err) throw err;
    let match = data.match(re);
    if (match) {
        match = match.map(each => {
            // for stretch
            // console.log(each.slice(0, each.indexOf('>') - 1) + ' ' + each.slice(each.indexOf('>') + 1, each.length - 1));
            // console.log(each)
            console.log(each.slice(0, each.length - 1))
        });
    }
})

// Set up regex

// Find matches

// Print all matches
