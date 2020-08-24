var inputElement = document.querySelector('input[name=nome');
var btnElement = document.querySelector('button.botao');

btnElement.onclick = function () {
  var text = inputElement.value;
  alert(text);
};
