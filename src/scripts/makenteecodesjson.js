const fs = require('fs');

fs.readFile('../data/nteecodes.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  const lines = data.split('\n');
  const hashMap = {};

  lines.forEach((line) => {
    const splitLine = line.split(' ');
    const key = splitLine[0];
    const value = splitLine.splice(1,20).join(" ");

    hashMap[key] = value;
  });

  fs.writeFileSync('../data/nteecodes.json', JSON.stringify(hashMap));
});
