/*
this is the bonus practice - taking a text & CMU
to see if you can make a haiku. I was able to parse the text
& count each word's syllables, but 2 things I was unsure about:
1) how to structure the data so it'd be easy to traverse
2) what is the best way to create the haiku? look for a
specific syllable pattern?

*/

// HELPER FUNCTIONS
var parseDict = require('./parseDict.js');
var cmudictFile = parseDict.readFile('./cmudict.txt');
var book = parseDict.readFile('./Carroll.txt');


// 4/21 - I dont know if generic parse works right now, I split the text separation
// into two processes: get the words, count the syllables. haven't verified
// that both fxns work.


module.exports = {
  // find word's # of syllables if it has <8
  // add the for loop into this funcion, because right now
  // i have to finish syllList
  findWordSylls: function(array, w) {
    var elementPos = array.findIndex(function(x) {return x.word === w.toUpperCase(); })
      if (elementPos !== -1 && array[elementPos].syllables < 8) return array[elementPos].syllables < 8;
  },
  // parses a formatted list of words separated by '\n'
  syllCountByWord: function(array) {
  var lines = array.split("\n"), lineSplit;
  return lines.map(function(line) {
    lineSplit = line.split("  ");
    var count = exports.findWordSylls(lineSplit[1]);
    if (count < 8) return { word: lineSplit[0], syllables: count };
  });
},

  listParse: function(text) {
    var list = text.split('\n');
    //var cmuSylls = exports.syllCountByWord(cmudictFile);
    // var syllList =
    // ^^^^ finsish this one!!!have to rework findWordSylls :O
    console.log(list);
  },

  // removes a text's punctuations
  puncRemover: function(text) {
  return text.split('.').map(function(t) {
    return t.replace(/[^\w\s]|_/g, '')
         .replace(/\s+/g, ' ').trim();
  });
},


// structures the CMU by word & syllable if it has <8 syll
 // add genericParse: genericParse, back after you fix it


// // parses a text file with punctuation
// var genericParse = function(txt) {
//   txt = puncRemover(txt);
//   var test1 = txt.join(" ");
//   var wordsArr = txt.map(function(line){
//     return line.split(" ");
//   });
//   return wordsArr;
//    // abstracting out the syll splice for its own run
//    var textToSyllCount = function () {
//     var cmu = syllCountByWord(cmudictFile);
//     var syll = 0;
//     var word1 = "";
//     for (var i = 0; i < wordsArr.length; i++) {
//       if (wordsArr[i] !== undefined && isNaN(wordsArr[i])) {
//         syll = findWordSylls(cmu,wordsArr[i]);
//         word1 = new RegExp('\\b' + wordsArr[i] + '\\b', 'gi');
//         // how to format syll & word to make it easy to search for haiku?
//         test1 = test1.replace(word1, syll);
//    }
//    // map the test1 to the lines
//    return test1;
// }
//    }
}
