function filtro() {
  let valor = document.querySelector('input').value;
  let text = document.querySelector('p');
  let res = valor.split('');
  res = res.filter(function(item) {
    if (!(item >= 0 )) {
      return false;
    } else {
      return true;
    }
  })
  res = res.join('');
  text.innerHTML = res;
  }
