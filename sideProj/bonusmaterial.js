/*
what is the best way to create the haiku from a text? look for a
specific syllable pattern?
*/
const parseDict = require('../parseDict.js');
const cmudictFile = parseDict.readFile('../haikuGen/cmudict.txt');
const book = parseDict.readFile('./Carroll.txt');

  // generates an array of lines from book text, with punctuation except for '.'s & ','s for line variety
  const bookArray = (text) => {
    return text.split('.').join(' ').split(',');
  };

  // removes a text's punctuations
  const puncRemover = (text) => {
    return bookArray(text).map(function(line) {
      return line.replace(/[^\w\s]|_/g, '')
         .replace(/\s+/g, ' ').trim();
    });
  };
  // generates 'poem' from an array of strings with random # of lines
  const randomPoem = (array) => {
    let poem = [];
    let randomNumOfLines = Math.floor(Math.random() * 10) + 1;
    let randomNum = () => Math.floor(Math.random() * array.length);
    for (var i = 0; i < randomNumOfLines; i++) {
      if (i === randomNumOfLines) poem.push(array[randomNum()] + '.');
      else poem.push(array[randomNum()] + ', ');
    }
    return poem.join('\n');
  };
  // returns CMU set of unique words & syllable count;
  const cmuMap = () => {
    let lineSplit,
    syllables,
    cmu = cmudictFile.split("\n").map(function(line) {
      lineSplit = line.split("  ");
      lineSplit[0] = lineSplit[0].replace(/[(\d)]/g, '');
      syllables = parseDict.syllCount(''+lineSplit[1]);
      lineSplit[1] = syllables;
      return lineSplit;
    });
    return new Map(cmu);
  };

  const syllMap = cmuMap();
//looks at the CMU Map and returns word's syllable count
  const findWordSyllCount = (word) => syllMap.get(word.toUpperCase());


const testArr = puncRemover(book);
const words = randomPoem(testArr);
console.log(words);
//console.log(puncRemover(book))
module.exports = { testArr, words }

