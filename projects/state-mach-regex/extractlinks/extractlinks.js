const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// fs.readFile(filename, 'utf8', (error, data) => {
//     console.log(data)
//     if (error) throw error;

//     const regex = /(https?:\/\/.+?\")/g;

//     let links = data.match(regex)
//     if (links) {
//         links = links[0].slice(0, links[0].length - 1);
//     }

//     if (links === null) {
//         console.log('Cannot retrieve links')
//     } else {

//         console.log(links)
//     }
// })


// EXAMPLE SOLUTION

const filedata = fs.readFileSync(filename, { encoding: 'utf8' });

const regex = /https?:\/\/[^\\'"<>\s]+?\.[^\\'"<>\s]+/g;

const matches = filedata.match(regex);

for (let url of matches) {
    console.log(url);
};

console.log(matches.length);