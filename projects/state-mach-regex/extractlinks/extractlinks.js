const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];
const file = fs.readFileSync(filename, { encoding: 'utf8' });
const re = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;
const links = file.match(re);

let answers = fs.readFileSync('./answers.txt', { encoding: 'utf8' });
answers = JSON.parse(answers);

for (let i = 0; i < answers.length; i++) {
    if (links[i] !== answers[i]) {
        console.log(`Mismatched link: got ${links[i]} but expected ${answers[i]}`);
        break;
    }
}

console.log(`You found all the correct links!`);

// try {
//     const data = fs.readFileSync('./answers.txt', { encoding: 'utf8' });
//     const links = JSON.parse(data);
//     console.log(links == orig_links);
// } catch (err) {
//     fs.writeFileSync('./answers.txt', JSON.stringify(orig_links), (ferr) => {
//         if (ferr) {
//             console.log('Error writing links to answers.txt: ', ferr);
//             return;
//         }
//     });
// }
