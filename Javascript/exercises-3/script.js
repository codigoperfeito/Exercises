const calculadora = {
  numero : '',
  fimCalc : '',
  valor(x){
    this.numero += x;    
  },
  backspace(){
    var x = parseInt(this.numero.length - 1);
    var valor = this.numero.substring(0 , x);
    this.numero = valor;
  },
  calcular(){    
    this.fimCalc = eval(this.numero.split('').join(''));
    this.numero = this.fimCalc;
  },
};
document.querySelector('table').addEventListener('click', function(){ document.querySelector('p').innerHTML = calculadora.numero});
