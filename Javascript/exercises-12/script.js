function zoomImage(imageId, resultId){

  // criando variaveis que serão usadas 
  var img,resunt,pseudo, zx, zy;

  // adicionando o DOM a variaveis 
  img = document.getElementById(imageId);
  resunt = document.getElementById(resultId);

  // criando elemento PSEUDO 

  pseudo = document.createElement('div');

  // criando class e colocando nome da class no PSEUDO

  pseudo.setAttribute('class','pseudo');

  // adicionando PSEUDO antes do IMG
  img.parentElement.insertBefore(pseudo, img)

  // calculo para pegar valor de posições para RESULT 
  // de acordo com tamanho de PSEUDO

  zx = img.width / pseudo.offsetWidth;
  zy = img.width / pseudo.offsetHeight;

  zrw = img.offsetWidth * zx;
  zrh = img.offsetHeight * zy;

  // adicionando style de RESULT para ficar do tamanho da IMG
  
  resunt.style.width = img.offsetWidth + "px";
  resunt.style.height = img.offsetHeight + "px";

  // Adicionando eventos
  img.addEventListener('mousemove', pseudoMove);
  pseudo.addEventListener('mousemove', pseudoMove);

  // funções

  function pseudoMove(){
    // adicionando a função "get..." no pos para acessar valores

    pos = getCursorPos();
    
    // acessando valores com pos
    // calculo para pegar valor correto do mouse adicionando cursor
    // no meio do bloco 

    x = pos.x - (pseudo.offsetWidth / 2);
    y = pos.y - (pseudo.offsetHeight / 2);

    // apos calculos vamos colocar posição do x que será movimentação
    // do nosso bloco de acordo com mouse
    

    // codigo para ele não ficar atrás ( -X / -Y ) do quadrado da imagem

    if (x < 0){
      x = 0;
    }
    
    if (y < 0){
      y = 0;
    }

    // codigo para ele não ultrapassar o quadrado da imagem (+X / +Y)

    if (x > img.offsetWidth - pseudo.offsetWidth + window.pageXOffset){
      x = img.offsetWidth - pseudo.offsetWidth + window.pageXOffset;
    }
    if (y > img.offsetHeight - pseudo.offsetHeight + window.pageYOffset){
      y = img.offsetHeight - pseudo.offsetHeight + window.pageYOffset;
    }
    /* fazendo nosso mouse se mover */
    pseudo.style.left = pos.a.left + x + "px";
    pseudo.style.top = pos.a.top + y + "px";

    result.style.backgroundSize = zrw + 'px ' + zrh + 'px';
    result.style.backgroundImage = "url(https://i.ibb.co/H2YG9Dn/zelda.png)";
    resunt.style.backgroundPosition = - x * + (zrw / result.offsetWidth) + "px " + -y * (zrh / result.offsetHeight) + "px";
  }
  function getCursorPos(){
    var a, e, x, y;

    //pegando evento window
    e = window.event;

    // adicionando as propriedades ao A da img
    a = img.getBoundingClientRect();

    // x e y vão receber posição mouse na pagina menos posição da img

    x = e.pageX - a.left;
    y = e.pageY - a.top;

    // adicionando valor de acrescento de scroll caso tenha.
    // para o mouse andar junto com quadrado

    x += window.pageXOffset;
    y += window.pageXOffset;


    //retornando valores para serem usados em outra função
    
    return{
      y,x,a
    };
  }
};
zoomImage("image" , "result");
