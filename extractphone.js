
const fs = require('fs');

const file = '';

const loadFile = () => {
  if(!process.argv[2]) {
    console.error('Please supply a file to extract phone nums from');
    process.exit(0);
  } else {
    const data = fs.readFileSync(process.argv[2]);
    const file = data.toString().split('\n');

    let output = '';
    for(let i = 0; i < file.length; i++) {
      const temp = file[i].match(/\(?(\d{3})\)?\s?-?(\d{3})\s?-?(\d{4})/);
      output += temp[1] + temp[2] + temp[3] + '\n';
    }
    console.log(output);
  }
};

loadFile();
