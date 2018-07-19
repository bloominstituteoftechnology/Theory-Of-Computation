const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
let arr = [];
let lineReader = require('readline').createInterface({
    input: fs.createReadStream(filename)
});

lineReader.on("line", (line) => {
    let search = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]+\.[a-z]+([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    let link = line.match(search);

    if (link != null) {
        arr.push(link);
    }
});

lineReader.on("close", () => {
    arr.forEach(link => {
        link.forEach(a => {
            console.log(a);
        });
    });
});

