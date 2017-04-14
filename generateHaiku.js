var makeHaiku = require('./makeHaiku.js');
var parseDict = require('./parseDict.js');

var cmudictFile = parseDict.readFile('./cmudict.txt');
var syl = parseDict.cmuBySyllCount(cmudictFile);
var structure = [[1,1,1,1,1],[1,2,1,3],[3,1,1]];

//console.log(parseDict.genericSyllCount(book));
console.log(makeHaiku.createHaiku(structure, syl));
