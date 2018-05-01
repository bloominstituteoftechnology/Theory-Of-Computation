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

// non-stretch
let re = /https?:\/\/\S+['"]/g
// let re = /(?<=href=").*?(?=")/g; // use --harmony in node command
fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
    if (err) throw err;
    let match = data.match(re);
    if (match) {
        match = match.map(each => {
            // for stretch
            // console.log(each.slice(0, each.indexOf('>') - 1) + ' ' + each.slice(each.indexOf('>') + 1, each.length - 1));

            // for non-stretch
            console.log(each.slice(0, each.length - 1))
            // console.log(each.slice(0, each.length))
        });
    }
})

// Nikhil's code
// // Read file
// let lines = fs.readFileSync(`./${filename}`, 'utf-8').split(/\n|\t/);

// // Set up regex
// let tagsExp = new RegExp(/<[a].+>.*<\/a>/, 'i');
// let httpExp = new RegExp(/"http.+?"/);
// let textExp = new RegExp(/>(\w|\d|\s)+</);

// // Find matches
// lines = lines
// // Filter out any lines that don't contain <a> tags
//     .filter(line => tagsExp.test(line))
// // Turn each line into just the <a> tags
//     .map(line => line.match(tagsExp)[ 0 ]);

// let links = lines
// // Filter out any lines that don't contain httpExp criteria
//     .filter(line => httpExp.test(line))
// // Contruct link and text (if exists) for each line
//     .map(line => {
//         let link = line.match(httpExp)[ 0 ];
//         // Remove the quotes from the link
//         let res = link.slice(1, -1);
//         // If text match exists, concat the text to the link
//         if (line.match(textExp)) {
//             let text = line.match(textExp)[ 0 ];
//             res += ' || ';
//             // Remove the surrounding ><'s
//             res += text.slice(1, -1);
//         }
//         return res;
//     });

// // Print all matches
// links.forEach(link => console.log(link));

// Set up regex

// Find matches

// Print all matches
