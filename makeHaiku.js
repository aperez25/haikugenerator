var chalk = require('chalk');

exports.createHaiku = function(structure, syllObj) {
  console.log(syllObj);
  return structure.map(function(lines){
    return lines.map(function(num){
      var words = syllObj[num];
      return words[Math.floor(Math.random() * words.length - 1)];
    }).join(" ");
  }).join('\n');
}

exports.randomPoem = function(array) {
  var poem = [];
  for (var i = 0; i < 3; i++) {
    poem.push(array[Math.floor(Math.random() * array.length)]
    + ' ' + array[Math.floor(Math.random() * array.length)] + ' '
    + array[Math.floor(Math.random() * array.length)]);
  }
  return chalk.blue(poem.join('\n'));
}
