const readline = require('readline');


const readCases = () => {
  console.log('-- GET CASES -- ');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    console.log(`Received: ${line}`);
  });
};

export default readCases;
