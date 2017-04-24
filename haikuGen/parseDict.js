var fs = require("fs");

exports.readFile = function(file){
  return fs.readFileSync(file).toString();
}

var syllCount = function(phrase) {
  var count = 0;
    if (phrase) var syllables = phrase.match(/\d/g);
      if(syllables) count = syllables.length;
  return count;
}

var cmuBySyllCount = function(data){
  var syllTable = {};
  var lines = data.split("\n"), lineSplit;
  lines.forEach(function(line) {
    lineSplit = line.split("  ");
    lineSplit[0] = lineSplit[0].replace(/[(\d)]/g, '');
    var syllables = syllCount(lineSplit[1]);
    if (syllables < 8) {
      if (syllTable.hasOwnProperty(syllables)) {
        syllTable[syllables].push(lineSplit[0]);
      }
      else syllTable[syllables] = [lineSplit[0]];
    }
    });
  return syllTable;
}

module.exports = {
  cmuBySyllCount: cmuBySyllCount,
  syllCount: syllCount
}
