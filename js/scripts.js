//backend
var split3 = function (input) {
  var arr = input.split(' ')
  var newArr = []
  arr.forEach(function (word) {
    if (word.length >= 3) {
      newArr.push(word)
    }
  })
  return newArr.join(' ');
}

//frontend
$(document).ready(function () {

});