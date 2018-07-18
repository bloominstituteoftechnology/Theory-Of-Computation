const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
fs.readFile(filename,'utf8',function(err,data){
  if(err){
    console.log(err);
    return
  }
  links = [];
  words = data.split(" ");
  for(i = 0; i < words.length; i++){
    //console.log(words[i]);
    if(words[i].includes('https://')){
      console.log(words[i]);
    }
  }
});
// Set up regex

// Find matches

// Print all matches
