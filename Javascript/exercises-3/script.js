const calculadora = {
  numero : '',
  fimCalc : '',
  valor(x){
    this.numero += x;    
  },
  calcular(){    
    this.fimCalc = eval(this.numero.split('').join(''));
    this.numero = this.fimCalc;
  },
};
document.querySelector('table').addEventListener('click', function(){ document.querySelector('input').value = calculadora.numero});
