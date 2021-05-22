const calculator = {
  number: "",
  finishCalc: "",
  v(x) {
    this.number += x;
    var z = this.number.charAt(this.number.length-1);
    var z = z.charCodeAt();
    var y = this.number.charAt(this.number.length-2);
    var y = y.charCodeAt();
    if (z >= 48 || y >= 49){
      //true
    }else {
      let c = parseInt(this.number.length - 1);
      let j = this.number.substring(0, c);
      this.number = j;
    }
  },
  backspace() {
    this.number = this.number.toString();
    var x = parseInt(this.number.length - 1);
    var v = this.number.substring(0, x);
    this.number = v;
  },
  final() {
    this.finishCalc = eval(this.number.split("").join(""));
    this.number = this.finishCalc.toString();
    console.log(this.number);
    console.log(this.finishCalc);
    if (this.number.length >= 39) {
      this.number = "erro: value big";
    } else {
      this.number = parseFloat(this.finishCalc.toFixed(2)).toPrecision();
    }
  }
};
document.querySelector("table").addEventListener("click", clickFun);
function clickFun() {
  document.querySelector("p").innerHTML = calculator.number;
}
