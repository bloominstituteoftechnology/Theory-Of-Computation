let readline = require('readline');
let state = 'OFF';
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
  let command = line.toUpperCase();
  
  if (command === state) {
    console.log(`Blinkers are already set to ${line}`);
  } else {
    switch(command) {
      case 'EXIT':
        console.log('Goodbye.');
        process.exit(0);
      case 'OFF':
        state = command;
        console.log('Blinkers are currently off.');
        break;
      case 'LEFT':
        state = command;
        console.log('Left blinker active!');
        break;
      case 'RIGHT':
        state = command;
        console.log('Right blinker active!');
        break;
      case 'HAZARDS':
        state = command;
        console.log('Hazards active, both blinkers on!');
        break;
      default:
        console.log(`I don't understand ${line}, please try OFF, LEFT, RIGHT, or HAZARDS`);
        break;
    }
  }
});
