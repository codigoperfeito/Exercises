window.addEventListener('keydown', capture);
function capture(){
  var text = document.querySelector('h2');
  var x = window.event.key;
  text.textContent = x.toUpperCase();
} 
