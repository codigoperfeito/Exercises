document.querySelector("button").addEventListener("click", mudarstyle);
function mudarstyle() {
  var bloco = document.querySelector(".bloco");
  var botao = document.querySelector("button");
  botao.value == 1
    ? ((bloco.style.visibility = "visible"),
      (bloco.style.width = "500px"),
      (bloco.style.height = "50px"),
      (bloco.style.backgroundColor = "green"),
      (botao.value = "2"))
    : ((bloco.style.visibility = "hidden"),
      (bloco.style.width = "0px"),
       (bloco.style.height = "0px"),
      (bloco.style.backgroundColor = "red"),
      (botao.value = "1"));
}
