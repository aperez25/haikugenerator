/*
what is the best way to create the haiku from a text? look for a
specific syllable pattern?
*/
var parseDict = require('../parseDict.js');
var cmudictFile = parseDict.readFile('./cmudict.txt');
var book = parseDict.readFile('./Carroll.txt');

  // generates an array of lines from book text, with punctuation except for '.'s & ','s for line variety
  var bookArray = (text) => {
    return text.split('.').join(' ').split(',');
  };
  // removes a text's punctuations
  var puncRemover = (text) => {
    return bookArray(text).map(function(t) {
      return t.replace(/[^\w\s]|_/g, '')
         .replace(/\s+/g, ' ').trim();
    });
  };
  // generates 'poem' from an array of strings with random # of lines
  var randomPoem = (array) => {
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
  var cmuMap = () => {
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
//looks at the CMU Map and returns word's syllable count
  var findWordSyllCount = (word) => {
    var syllMap = cmuMap();
    return syllMap.get(word.toUpperCase());
  };

// parses a text file with punctuation to syllable count of each word in the text
//WHAT'S THE BEST WAY TO COUNT THE SYLLABLES?!?! GAH

// returns a nested array of a book's line split into individual words
  var indWordsArray = (text) => {
    return puncRemover(text).map((line) => {
      var word = line.split(' ');
      return word;
    });
  };


// this works but it's still very slow :(

  var haikuParse = (array) =>  {
    var haikuArr = [], syllables = 0;
    // generate a randomNum for the for loop length
    var randomNum = Math.floor(Math.random() * 10) + 1;
    // create an array starting index to slice the array
    var startIndex = randomNum / 2;
    var shortArray = array.slice(startIndex, randomNum);
    // loop through the shortened lines array and find lines with 17+ syllables
    for (var i = 0; i < shortArray.length; i++) {
      shortArray[i].split(' ').forEach(function(word) {
        // would it be better to change findWords to prcess a whole line?
         var wordCount = findWordSyllCount(word);
         if (wordCount) syllables += wordCount;
      })
      if (syllables >= 17) haikuArr.push(shortArray[i]);
      syllables = 0;
    }
    return haikuArr;
  };

// module.exports = {
// }
var testArr = puncRemover(book);
var words = haikuParse(testArr);
console.log(words);
//console.log(puncRemover(book))

