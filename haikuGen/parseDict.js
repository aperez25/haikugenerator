var fs = require("fs");

exports.readFile = function(file){
  return fs.readFileSync(file).toString();
}

exports.syllCount = function(phrase) {
  var count = 0;
    if (phrase) var syllCount = phrase.match(/\d/g);
      if(syllCount) count = syllCount.length;
  return count;
}

exports.cmuBySyllCount = function(data){
  var syllTable = {};
  var lines = data.split("\n"), lineSplit;
  lines.forEach(function(line) {
    lineSplit = line.split("  ");
    lineSplit[0] = lineSplit[0].replace(/[(\d)]/g, '');
    var syllables = exports.syllCount(lineSplit[1]);
    if (syllables < 8) {
      if (syllTable.hasOwnProperty(syllables)) {
        syllTable[syllables].push(lineSplit[0]);
      }
      else syllTable[syllables] = [lineSplit[0]];
    }
    });
  return syllTable;
}

