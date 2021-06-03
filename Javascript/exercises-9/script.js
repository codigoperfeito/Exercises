var buttons = document.querySelectorAll('.botao button');
buttons.forEach(function(button){
button.addEventListener('click', function(){
var value = this.value;
if(value == 1) {
console.log(value+' true');
} else {
console.log(value+' false');
}
})
})
