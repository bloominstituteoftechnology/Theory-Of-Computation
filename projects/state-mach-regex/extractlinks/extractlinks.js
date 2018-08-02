const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME
function main(filename) {
    // Read file
    let fileTxt;
    try {
        fileTxt = String(fs.readFileSync(filename));
    } catch (err) {
        process.stdout.write('ERROR: File could not be opened. Please double check path.\n');
        return;
    }
    // Set up regex
    const linkRegex = /https?:\/\/([^\/"']+)\.([^\/"'\W]+)\/?([^"']+)/gi;
    // Find matches
    const matches = fileTxt.match(linkRegex);
    // Print all matches
    for (const url of matches) {
        process.stdout.write(`${url}\n`);
    }
    process.stdout.write(`---\nNumber of matches: ${matches.length}\n`);
    return;
}

main(filename);