var btn = document.querySelector('table');
btn.addEventListener("click", calculadora.myFunction);
/*function myFunction(x){
  var x = event.target.value;
  
  changeSC(z);
};
function changeSC(x){
  document.querySelector('p').innerHTML = x;
}*/

var calculadora = {
  myFunction(x){
  var x = event.target.value;
  var z = x;
  changeSC(z);
},
  changeSC(x){
    document.querySelector('p').innerHTML = x;
  }
}
