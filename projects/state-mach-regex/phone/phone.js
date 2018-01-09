const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    const regex = /(\(?[0-9]{3}\)?(?:[\s|-]?|[\s-]{0,2}\s?)[0-9]{3}[\s-]{0,2}\s?[0-9]{4})/g;
    // Find matches
    const matches = line.match(regex);
    if (matches === null) {
        console.log("No phone number phone in entry...");
    } else {
        for (let i = 0; i < matches.length; i++) {
            const temp = matches[i].split('').filter((item, i) => {
                return !isNaN(parseInt(item));
            }).join('');
            console.log(temp);
        }
    }
});
