var makeHaiku = require('./makeHaiku.js');
var parseDict = require('./parseDict.js');

var cmudictFile = parseDict.readFile('./cmudict.txt');
var syl = parseDict.wordsBySyllCount(cmudictFile);

//console.log(parseDict.genericSyllCount(book));
console.log(makeHaiku.createHaiku([
  [2,2,1],
  [3,1,3],
  [3,2]
], syl));
