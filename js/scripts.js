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

  $('#formOne').submit(function (event) {
    event.preventDefault();
    var input = $('#myString').val();
    var output = split3(input);
    $('#stringOutput').text(output)
  })


});