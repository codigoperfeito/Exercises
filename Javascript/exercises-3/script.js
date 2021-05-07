var btn = document.querySelector('table');
btn.addEventListener("click", myFunction);
function myFunction(){
  var valor = event.target.value;
  changeSC(valor);
};
function changeSC(x){
  document.querySelector('p').innerHTML = x;}
