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

  // calculando tamanho da imagem referencia a propoção que
  // voce quer que veja o zoom pegando pelo menor

  if (img.offsetWidth > img.offsetHeight){
      img.style.width = '1200px';
  } else{
      img.style.height = '900px';
  };
  // Calculo de tamanho (width / height)
  x = img.clientWidth / pseudo.clientWidth;
  y = img.clientHeight / pseudo.clientHeight;

  // condional para pegar tamanho do maior e colocar no tamanho
  // do menor divido por 2

  if (y >= x) {    
    zx = (img.clientWidth / pseudo.clientWidth) / 2;
    zy = (img.clientWidth / pseudo.clientWidth) / 2;
  }else{
    zx = (img.clientHeight / pseudo.clientHeight) / 2;
    zy = (img.clientHeight / pseudo.clientHeight) / 2;
  }

  // calculando tamanho da BG do result

  zrw = img.clientWidth * zx;
  zrh = img.clientHeight * zy;

  // Condicional para adicionar style no RESULT de acordo com
  // maior dos dois divido por 2

  if (y >= x) {
    resunt.style.width = (img.clientWidth / 2) + "px";
    resunt.style.height = (img.clientWidth / 2) + "px";
  } else{    
    resunt.style.height = (img.clientHeight / 2) + "px";
    resunt.style.width = (img.clientHeight / 2) + "px";
  }
  // Adicionando eventos

  img.addEventListener('mouseover', pseudoVisible);
  pseudo.addEventListener('mouseover', pseudoVisible);

  img.addEventListener('mouseout', pseudoHidden);
  pseudo.addEventListener('mouseout', pseudoHidden);

  img.addEventListener('mousemove', pseudoMove);
  pseudo.addEventListener('mousemove', pseudoMove);

  // funções
  function pseudoVisible() {   
    pseudo.style.opacity = 1;
    result.style.opacity = 1;
  };
  function pseudoHidden() {    
    pseudo.style.opacity = 0; 
    result.style.opacity = 0;   
  };

  function pseudoMove(e){

    // adicionando a função "get..." no pos para acessar valores
    
    pos = getCursorPos(e);
    
    // acessando valores com pos
    // calculo para pegar valor correto do mouse adicionando cursor
    // no meio

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

    if (x > img.offsetWidth - pseudo.offsetWidth){
      x = img.offsetWidth - pseudo.offsetWidth;
    }
    if (y > img.offsetHeight - pseudo.offsetHeight){
      y = img.offsetHeight - pseudo.offsetHeight;
    }
    /* fazendo nosso mouse se mover e adicionando a diferença
    da dela porque pos.a é calculo da posição da img logo precisa
    calcular o valor caso tenha scroll para descer */

    pseudo.style.left = (pos.a.left + window.pageXOffset) + x + "px";
    pseudo.style.top = (pos.a.top + window.pageYOffset) + y + "px";

    // ajeitando a imagem no RESULT tanto tamanho como posição

    result.style.backgroundSize = zrw + 'px ' + zrh + 'px';
    result.style.backgroundImage = "url(" + img.src + ")";
    resunt.style.backgroundPosition = - (x * zx) + "px " + - (y * zy)  + "px";
  }
  function getCursorPos(e){    
    // variaveis que serão usadas

    var a, x, y;

    //pegando evento window

    e = window.event

    // adicionando as propriedades ao A da img

    a = img.getBoundingClientRect();

    // x e y vão receber posição mouse na pagina menos posição da img

    x = e.pageX - a.left;
    y = e.pageY - a.top;

    // adicionando valor de acrescento de scroll caso tenha.
    // para o mouse andar junto com quadrado

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;

    //retornando valores para serem usados em outra função
    
    return{
      y,x,a
    };
  }
};
zoomImage("image" , "result");
