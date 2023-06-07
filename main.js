function batida(idAudio) {
  const elemento = document.querySelector(idAudio);

  //caso coloque um numero, caso coloque outro caracter vai dar erros diferentes, não queremos exibir erros
  //dessa maneira
  //aqui não precisamos botar elemento != null, pois ele já entende que o elemento deve existir para ser true
  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado");
  }

  //código esta guardando entre parenteses para ser exectado apenas com a execução
}
const listaTeclas = document.querySelectorAll(".tecla");
//isto é uma referencia, o valor é constante pois não vai mudar
for (let i = 0; i < listaTeclas.length; i++) {
  const tecla = listaTeclas[i];
  const instrumento = tecla.classList[1];
  //na lista de classes, o 1 valor é o nome diferente das teclas (tecla_pom)
  //assim podemos acessar cada botão unico
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    batida(idAudio);
  };
  //uma função anonima
  //console.log(i);

  //ao apertar tab e apertar algum teclado
  //tipo no unity
  tecla.onkeydown = function (event) {
    console.log(event.code);
    //isto está válido pra todas as teclas, então devemos dar uma condição
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add("ativa");
    }
    //a propria linguagem fornece um executor para os eventos, para todas as funções atreladas a um evento
    //como primeiro parametro podemos dar um nome qualquer para guardar os detalhes dos eventos acionados
    //pode ser qualquer nome, normalmente botam event ou e
    //ali todos os detalhes do evento são acionados
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

//o navegador bloqueia funções que executa midias antes do usuario interagir com a página
//assim, precisamos do .play estar dentro de algo que o chama com interação do usuário, como uma função

//document.querySelector(".tecla_pom").onclick = batida;

/*
não é o ideal usar o onclick ou qualquer outra função direto do html
se queremos guardar uma função em um onclick, precisamos tirar o parenteses da função
caos contrário irá executar na hora, isso é por causa da ordem de execução do JS

sem o parenteses vai guardar a referencia da função, e não sua execução ()

ao o onclick ser executado, ele quer que retorne o som

*/
