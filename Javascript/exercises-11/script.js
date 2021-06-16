var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvasWidth = 500;
var canvasHeight = 500;
var spritWidth = 500;
var spritHeight = 500;

var img = document.querySelector('.img');
var sx = document.getElementById('sx').value;
var sy = document.getElementById('sy').value;
var sWidth = document.getElementById('sWidth').value;
var sHeight = document.getElementById('sHeight').value;
var dx = document.getElementById('dx').value;
var dy = document.getElementById('dy').value;
var dWidth = document.getElementById('dWidth').value;
var dHeight = document.getElementById('dHeight').value;
var botoesAll = document.querySelector('.botoesAll');
botoesAll.addEventListener('change', valueB);
function valueB(){  
  console.log(event.target.id);
}

