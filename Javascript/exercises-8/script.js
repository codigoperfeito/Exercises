var body = document.querySelector('body');
var text = document.querySelector('h2');
body.addEventListener('keydown', capture);
function capture(){
  var x = window.event.key;
  text.innerHTML = x.toUpperCase();
}