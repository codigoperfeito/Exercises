var btn = document.querySelector('tr');
btn.addEventListener("click", myFunction);
function myFunction(){
  this.valor = event.target.value;
  return valor;
}
var valor = ''
changeSC(valor);
function changeSC(x){
  document.querySelector('p').innerHTML = x;
}
