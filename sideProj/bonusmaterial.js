/*
what is the best way to create the haiku from a text? look for a
specific syllable pattern?
*/
var chalk = require('chalk');
var parseDict = require('./parseDict.js');
var cmudictFile = parseDict.readFile('./cmudict.txt');
var book = parseDict.readFile('./Carroll.txt');

module.exports = {
  // generates an array from book text, with punctuation except for '.'s & ','s
  bookArray: function(text) {
    return text.split('.').join('').split(',');
  },
  // removes a text's punctuations, splitting the text by sentence and then commas for line variety
  puncRemover: function(text) {
  return text.split('.').join('').split(',').map(function(t) {
    return t.replace(/[^\w\s]|_/g, '')
         .replace(/\s+/g, ' ').trim();
  });
},
  // generates 'poem' from an array of strings with random # of lines
  randomPoem: (array) => {
    let poem = [];
    let randomNumOfLines = Math.floor(Math.random() * 10) + 1;
    let randomNum = () => Math.floor(Math.random() * array.length);
    for (var i = 0; i < randomNumOfLines; i++) {
      if (i === randomNumOfLines - 1) poem.push(array[randomNum()] + '.');
      else poem.push(array[randomNum()] + ', ');
    }
    return poem.join('\n');
  },
  // returns CMU set of unique words & syllable count;
  cmuMap: () => {
    let cmu = cmudictFile.split("\n"), lineSplit, syllables;
    cmu = cmu.map(function(line) {
      lineSplit = line.split("  ");
      lineSplit[0] = lineSplit[0].replace(/[(\d)]/g, '');
      syllables = parseDict.syllCount(''+lineSplit[1]);
      lineSplit[1] = syllables;
      return lineSplit;
      });
    return new Map(cmu);
  },
//looks at the CMU Map and returns word's syllable count
  findWordSyllCount: (word) => {
    var syllMap = module.exports.cmuMap();
    return syllMap.get(word.toUpperCase());
  },

// parses a text file with punctuation to syllable count of each word in the text
//WHAT'S THE BEST WAY TO COUNT THE SYLLABLES?!?! GAH
  bookParse: function(text) {
  text = module.exports.puncRemover(text);
  // set of book's words - text is nested array thus the apply call
  var wordsArr = [].concat.apply([], text.map((line) => {
    return line.split(" ");
  }));
  // goes through the array
  var syllArr = wordsArr.map((word) => {
    var syllables = module.exports.findWordSyllCount(word);
    return syllables;
  })
  return syllArr;
  }
}
// var wordsArray = module.exports.puncRemover(book);
// console.log(module.exports.randomPoem(wordsArray));
//console.log(module.exports.puncRemover(book));
console.log(module.exports.bookParse(book));

// my thinking here was that you would run through the entire text,
// & basically create a map of the syllables, but it runs really slowly :<
    // bookParse: function(text) {
    // text = module.exports.puncRemover(text);
    // var transformedText = text.join(" "); // will hold changed text from words to syll #s
    // // set of book's words - text is nested array thus the apply call
    // var wordsSet = new Set([].concat.apply([], text.map((line) => {
    //   return line.split(" ");
    // })));
    // // goes through the Set,
    // wordsSet.forEach((word) => {
    //   var syllables = module.exports.findWordSyllCount(word);
    //   transformedText = module.exports.replaceAllWords(transformedText, word, syllables);
    // })
    // return transformedText;
    // }
    // HELPER FUNCTION FOR THE ABOVE:
  //     replaceAllWords: (str, find, replace) => {
  //   return str.replace(new RegExp(find, 'g'), replace);
  // },


