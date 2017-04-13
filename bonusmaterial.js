/*
this is the bonus practice - taking a text & CMU
to see if you can make a haiku. I was able to parse the text
& count each word's syllables, but 2 things I was unsure about:
1) how to structure the data so it'd be easy to traverse
2) what is the best way to create the haiku? look for a
specific syllable pattern?

*/

exports.genericParse = function(txt) {
  var cmu = exports.syllCountByWord(cmudictFile);
  txt = exports.puncRemover(txt);
  var test1 = txt.join(" ");
  txt.forEach(function(line){ // has thid as map but not returning anything, so changed to forEach
    var wordsArr = line.split(" ");
    var syll = 0;
      var word1 = "";
      for (var i = 0; i < txt.length; i++) {
       if (wordsArr[i] !== undefined && isNaN(wordsArr[i])) {
         syll = exports.findWordSylls(cmu,wordsArr[i]);
         word1 = new RegExp('\\b' + wordsArr[i] + '\\b', 'gi');
         // how to format syll & word to make it easy to search for haiku?
         test1 = test1.replace(word1, syll);
       }
   }});
   // map the test1 to the lines
   return test1;
}


// HELPER FUNCTIONS

var cmudictFile = exports.readFile('./cmudict.txt');
var book = exports.readFile('./Carroll.txt');

// removes text's punctuations
exports.puncRemover = function(text) {
  return text.split('.').map(function(t) {
    return t.replace(/[^\w\s]|_/g, '')
         .replace(/\s+/g, ' ').trim();
  })
}



// find word's # of syllables
exports.findWordSylls = function(array, w) {
  var elementPos = array.findIndex(function(x) {return x.word === w.toUpperCase(); })
  if (elementPos === -1) {
    return 0;
  }
  else {
    return array[elementPos].syllables;
  }
}

// structures the CMU by word & syllable
exports.syllCountByWord = function(data){
  var lines = data.split("\n"), lineSplit;
  return lines.map(function(line) {
    lineSplit = line.split("  ");
    var word = lineSplit[0];
    var count = exports.syllCount(lineSplit[1]);
    return { word: lineSplit[0], syllables: count };
    });
}

console.log(exports.genericParse(book));
//console.log(exports.findWordSylls(exports.syllCountByWord(cmudictFile), 'able'));
