 # Calculadora completa. ✔️ <br>
 
O exercicio que nós vamos fazer é uma calculadora bem completinha com diversos metodos, para vocês aprenderem e sairem daqui com um conhecimento avançado. Assumindo novos desafios e vendo o quão capazes de ir longe vocês são! ótimos estudos a todos.

### Obejtivos da nossa calculadora. 💭 <br> <br>

- Soma. ➕
- Dividir. ➗
- Subtrair. ➖
- Multiplicação. ✖️
- Extrair restando de divisão. ❕
- Não deixar simbulos alem dos matematicos serem adicionados. 🔣
- Começar somente com numero em vez de caractere matemática. 🔣
- Não deixar dois caracteres matematicos serem adicionados juntos. 🔣
</br></br>

***Exemplo final da calculadora.*** <br> <br>

![Gif exercises 3](https://github.com/codigoperfeito/Exercises/blob/main/Javascript/exercises-3/c8515301bf404eec97ef99e6bda235fc15_45_55%20(1).gif?raw=true) </br></br>

*Essa planejamento de aula foi dividido em duas etapas, a primeira é como fazer o style da calculadora e o segundo as funcionalidades, então vamos começar ...* </br>

# 1️⃣ Montando style da calculadora.



***Como foi feito o designer ?***

- **Fundo escuro**

`` (TAG HTML) { background-color: #fff; } `` // adicionando fundo escuro a um elemtento.<br>

- **Dividido em duas partes ( cima e baixo )**<br>

`` <div class="cube-top"> `` // parte de cima <br>
`` <div class="cube-bot"> `` // parte de baixo<br>

- **Sombra e borda amarelo escuro**<br>

`` (TAG HTML) { box-shadow: .5rem .5rem 0 #fab700; } `` // adicionando sombra amarela escura<br>
`` (TAG HTML) { border: 3px solid #fab700; } `` // adicionando bordar amarela escura <br>

- **Botões dos numeros dentro de tabelas**

 ```   
  <table>
     <tr class="title">
       c
     </tr>
  </table>
```

*table = tabela <br>
tr = coluna <br>
td = linha <br>
button = botão <br>
onclick = evento de clicar em javascript*

- 5 **fileiras na parte de baixo**

``<td><button onclick="calculadora.valor(this.value);" value='%'>% </button></td>`` // fileiras

- **Parte de cima com fundo branco**

`` (TAG HTML) {background-color: #fff;}`` // fundo branco

- **Adicionado icone do google no "backspace"**

`` <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> `` // adicionando link do google de icones <br>
`` <span class="material-icons"> `` // spam material-icons significa icone de apagar do google

# 2️⃣ Montando as funcionalidades da calculadora.

***Metodos utilizados e operadores***.

- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt">charAt</a> 
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length">length</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt">charCodeAt</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt">parseInt</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring">substring</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed">toFixed</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision">toPrecision</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat">parseFloat</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener">addEventListener</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML">innerHTML</a>


**Como vocês podem ver a cima, é o link da documentação de cada um dos metodos utilizados pra ajudar voces a estarem compreendo melhor, mais pra frente irei fazer uma simplificação da documentação pra vocês caso vocês queiram ( deixam nos comentários do youtube)**

### Agradecimentos 💙

Antes de começar quero agradecer a todos que me deram uma força pra fazer esse projeto funcionar, galera do b7web e galera do grupo Javascript Brasil.
