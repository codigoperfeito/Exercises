const calculadora = {
  numero : '',
  valor(x){
    this.numero += x;    
  },  
};
document.querySelector('table').addEventListener('click', function(){ document.querySelector('p').innerHTML = calculadora.numero});
