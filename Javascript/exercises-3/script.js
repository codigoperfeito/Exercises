const calculadora = {
  numero: "",
  fimCalc: "",
  valor(x) {
    this.numero += x;
    var z = this.numero.charAt(this.numero.length-1);
    var z = z.charCodeAt();
    var y = this.numero.charAt(this.numero.length-2);
    var y = y.charCodeAt();
    if (z >= 48 || y >= 49){
      //true carai
    }else {
      let c = parseInt(this.numero.length - 1);
      let j = this.numero.substring(0, c);
      this.numero = j;
    }
  },
  backspace() {
    this.numero = this.numero.toString();
    var x = parseInt(this.numero.length - 1);
    var valor = this.numero.substring(0, x);
    this.numero = valor;
  },
  calcular() {
    this.fimCalc = eval(this.numero.split("").join(""));
    console.log(this.fimCalc);
    this.numero = this.fimCalc.toString();
    if (this.numero.length >= 39) {
      this.numero = "erro: valor muito alto";
    } else {
      this.numero = parseFloat(this.fimCalc.toFixed(2)).toPrecision();
    }
  }
};
document.querySelector("table").addEventListener("click", clickFun);
function clickFun() {
  document.querySelector("p").innerHTML = calculadora.numero;
}
