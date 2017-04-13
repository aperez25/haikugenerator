var fs = require("fs");

exports.readFile = function(file){
  return fs.readFileSync(file).toString();
}

exports.syllCount = function(phrase) {
  var count = 0;
    if (phrase !== undefined) {
      var syllCount = phrase.match(/\d/g);
        if(syllCount) {
          count = syllCount.length;
        }
    }
  return count;
}

exports.wordsBySyllCount = function(data){
  var wordsBySyllCount = {};
  var lines = data.split("\n"), lineSplit;
  lines.forEach(function(line) {
    lineSplit = line.split("  ");
    var count = exports.syllCount(lineSplit[1]);
      if (wordsBySyllCount.hasOwnProperty(count)) {
        wordsBySyllCount[count].push(lineSplit[0]);
      }
      else {
        wordsBySyllCount[count] = [lineSplit[0]];
      }
    });
  return wordsBySyllCount;
}

