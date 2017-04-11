exports.createHaiku = function(structure, syllObj) {
  return structure.map(function(lines){
    return lines.map(function(num){
      var words = syllObj[num];
      return words[Math.floor(Math.random() * words.length - 1)];
    }).join(" ");
  }).join('\n');
}
