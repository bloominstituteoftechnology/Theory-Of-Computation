const fs = require('fs');
const http = require('http');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

// const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
http.createServer(function (req, res) {
  fs.readFile('stackoverflow.html', 'utf8', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        console.log(data);
        res.end();
        processFile(data);
    });
}).listen(8080);

// process the file
function processFile() {
    //console.log(`The runs processFile: ${data}`)
}
// Set up regex


// Find matches

//output the file
// Print all matches
