const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

//fs.readFile(filename, 'utf8', (err, data) => {
fs.readFile(`./${filename}`, 'utf8', (err, data) => {
	if(err){
		console.log(err);
	}else{

		const r = /https?:\/\/[\w]+\.[^\s'"]+/g;

		let links = data.match(r);

		links.forEach(link =>{
			console.log(link);
	  	});
	}
	
});

// Find matches

// Print all matches
