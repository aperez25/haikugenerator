var fs = require("fs");

exports.readCmudictFile = function(file){
  return fs.readFileSync(file).toString();
}

exports.wordsBySyllCount = function(data){
  var wordsBySyllCount = {};
  var lines = data.toString().split("\n"), lineSplit;
  lines.forEach(function(line) {
    lineSplit = line.split("  ");
    var tally = 0;
    if (lineSplit[1] !== undefined) {
      var syllCount = lineSplit[1].toString().match(/\d/g);
        if(syllCount) {
          tally = syllCount.length;
            if (wordsBySyllCount.hasOwnProperty(tally)) {
              wordsBySyllCount[tally].push(lineSplit[0]);
            }
            else {
              wordsBySyllCount[tally] = [lineSplit[0]];
            }
        }
    }
  });
  return wordsBySyllCount;
}

