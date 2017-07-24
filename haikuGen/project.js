const fs = require('fs');

const cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file) {
  return fs.readFileSync(file).toString();
}

function formatData(data) {
  const lines = data.toString().split('\n');
  var lineSplit = []
  lines.forEach((line) => {
    lineSplit = line.split('  ');
  });
}

formatData(cmudictFile);
