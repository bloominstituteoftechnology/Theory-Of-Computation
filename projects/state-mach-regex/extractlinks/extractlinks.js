const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];


// !!!! IMPLEMENT ME

// Read file
	fs.readFile(`./${filename}`, 'utf8', (err, data) => {
		if(err) return console.log({error: err});
		else {
			let reg = /("http.+?")/g;
			let result = data.match(reg);
			console.log(data);
			console.log(result);
		}
	});
// Set up regex
	
// Find matches

// Print all matches
