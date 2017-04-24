var poemDisplay = document.getElementById('poemDisplay').innerHTML(/*in
example he just used an array quotes[randomNumber]*/)
var newPoem = (array) => {
  var poem = [];
  var randomLines = Math.floor(Math.random() * 10)
  var randomNum = Math.floor(Math.random() * array.length)
  for (var i = 0; i < randomLines; i++) {
    poem.push(array[randomNum] + ' ' + array[randomNum] + ' '
    + array[randomNum]);
  }
  return poem.join('\n');
}
