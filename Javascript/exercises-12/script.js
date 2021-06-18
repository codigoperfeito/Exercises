function zoomImage(imageId, resultId){
  var img,resunt,pseudo, zx, zy;
  img = document.getElementById(imageId);
  resunt = document.getElementById(resultId);
  pseudo = document.createElement('div');
  pseudo.setAttribute('class','pseudo');
  img.parentElement.insertBefore(pseudo, img)
  zx = img.offsetWidth / pseudo.offsetWidth;
  zy = img.offsetHeight / pseudo.offsetHeight;
  resunt.style.width = img.offsetWidth + "px";
  resunt.style.height = img.offsetHeight + "px";
  img.addEventListener('mousemove', pseudoMove);
  pseudo.addEventListener('mousemove', pseudoMove);
  function pseudoMove(e){
    // adicionando a função "get..." no pos para acessar valores

    pos = getCursorPos(e);
    
    // acessando valores com pos
    // calculo para pegar valor correto do mouse adicionando cursor
    // no meio do bloco 

    x = pos.x - (pseudo.offsetWidth / 2);
    y = pos.y - (pseudo.offsetHeight / 2);

    // apos calculos vamos colocar posição do x que será movimentação
    // do nosso bloco de acordo com mouse
    
    if (x < 0){
      x = 0;
    }
    if (x > img.width - pseudo.offsetWidth ){
      x = img.width - pseudo.offsetWidth;
    }
    if (y > img.height - pseudo.offsetHeight){
      y = img.height - pseudo.offsetHeight;
    }
    if (y < 0){
      y = 0;
    }
    /* fazendo nosso mouse se mover */
    pseudo.style.left = pos.a.left + x + "px";
    pseudo.style.top = pos.a.top + y + "px";
  }
  function getCursorPos(e){
    var a, e, x, y;

    //pegando evento window
    e = window.event;

    // adicionando as propriedades ao A da img
    a = img.getBoundingClientRect();

    // x e y vão receber posição mouse na pagina menos posição da img

    x = e.pageX - a.left;
    y = e.pageY - a.top;

    //retornando valores para serem usados em outra função
    
    return{
      y,x,a
    };
  }
};
zoomImage("image" , "result");