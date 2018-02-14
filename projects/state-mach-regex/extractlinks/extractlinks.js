const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// start with https and pull all characters until you see a quotation, unless it's whitespace
const regEx = /(https:\/\/\S+(?=\"))/gi

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) console.log(err);
        // exit(1);

    let found; 
    while ((found = data.match(regEx)) !== null) {
        console.log(found);
    }
});


// this works in repl.it, passing the entire contents of the file in as a string literal
// const regEx = /(https:\/\/\S+(?=\"))/gi
// function parseMe(data) {
//         let found = data.match(regEx);
//     console.log(found);
// }
// parseMe(
//   `<!DOCTYPE html>
// <html>

//     <head>

//         <title>Stack Overflow - Where Developers Learn, Share, &amp; Build Careers</title>
//         <link rel="shortcut icon" href="https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d">
//         <link rel="apple-touch-icon image_src" href="https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a">
//         <link rel="search" type="application/opensearchdescription+xml" title="Stack Overflow" href="/opensearch.xml">
//         <meta name="description" content="Stack Overflow is the largest, most trusted online community for developers to learn, share​ ​their programming ​knowledge, and build their careers."/>


//         <meta property="og:type" content="website"/>...`);