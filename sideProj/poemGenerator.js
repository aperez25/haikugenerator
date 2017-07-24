// var poemDisplay = document.getElementById('poemDisplay').innerHTML(/*in
// example he just used an array quotes[randomNumber]*/)
var poem = require('./bonusmaterial')
const fs = require('fs');
const badWords = fileToArr('bad-words.txt');

function fileToArr(file){
  return fs.readFileSync(file).toString().split('\n');
}

const newPoem = (array) => {
  const poem = [];
  const randomLines = Math.floor(Math.random() * 10)
  for (var i = 0; i < randomLines; i++) {
    poem.push(array[Math.floor(Math.random() * array.length)] + ' ' + array[Math.floor(Math.random() * array.length)] + ' '
    + array[Math.floor(Math.random() * array.length)]);
  }
  return poem.join('\n');
}

const insultPoemGenerator = newPoem(badWords);

console.log(insultPoemGenerator);
