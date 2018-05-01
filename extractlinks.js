const fs = require('fs');

const file = '';

const loadFile = () => {
  if(!process.argv[2]) {
    console.error('Please supply a file to extract links from');
    process.exit(0);
  } else {
    const data = fs.readFileSync(process.argv[2]);
    const file = data.toString();
    const regex = new RegExp(/(http|https):\/\/([\w_-]+\.[\w_-]+)([\w.,@?^=%&:/~+#-]*)?/, 'g');
    const links = file.match(regex);

    console.log(links);
  }
};

loadFile();
