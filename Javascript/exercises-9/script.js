var buttons = document.querySelectorAll("button");
var form1 = document.querySelector('.inform1');
var form2 = document.querySelector('.inform2')
console.log(buttons);
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var value = this.value;
    if (value == 1) {
      form1.style.opacity = 1; 
      form1.style.left = 0;
      form2.style.opacity = 0;
      form2.style.left = "510px";
    } else {
      form2.style.opacity = 1; 
      form2.style.left = 0;
      form1.style.opacity = 0;
      form1.style.left = "-510px";
    }
  });
});
