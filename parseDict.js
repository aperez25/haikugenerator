const fs = require('fs');

const readFile = file => fs.readFileSync(file).toString();

const syllCount = (phrase) => {
  let count = 0;
  let syllables = '';
  if (phrase) syllables = phrase.match(/\d/g);
  if (syllables) count = syllables.length;
  return count;
}

const cmuBySyllCount = (data) => {
  const syllTable = {};
  const lines = data.split('\n');
  let lineSplit;
  lines.forEach((line) => {
    lineSplit = line.split('  ');
    lineSplit[0] = lineSplit[0].replace(/[(\d)]/g, '');
    const syllables = syllCount(lineSplit[1]);
    if (syllables < 8) {
      if (syllTable.hasOwnProperty(syllables)) {
        syllTable[syllables].push(lineSplit[0]);
      } else syllTable[syllables] = [lineSplit[0]];
    }
    });
  return syllTable;
}

module.exports = {
  readFile,
  cmuBySyllCount,
  syllCount,
}
