const calculadora = {
  numero : '',
  fimCalc : '',
  valor(x){
    this.numero += x;
    let y = parseInt(this.numero.length - 2);
    let z = this.numero.substring(y);
    if (z == "%%" || z == "++" || z == "--" || z == "**" || z == "//" || z == ".."){
      let c = parseInt(this.numero.length - 1);
        let j = this.numero.substring(0 , c);
        this.numero = j;
     };
  },
  backspace(){
    this.numero = this.numero.toString();
    var x = parseInt(this.numero.length - 1);
    console.log(x);
    var valor = this.numero.substring(0 , x);
    console.log(valor);
    this.numero = valor;
  },
  calcular(){    
    this.fimCalc = eval(this.numero.split('').join(''));   
    this.numero = this.fimCalc.toString();
    if (this.numero.length >= 39){
        this.numero = "erro: valor muito alto";
        }else{
          this.numero = parseFloat(this.fimCalc.toFixed(2));
        };
  },
};
document.querySelector('table').addEventListener('click', clickFun);
function clickFun(){
document.querySelector('p').innerHTML = calculadora.numero;
};

