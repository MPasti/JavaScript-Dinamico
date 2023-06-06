function batida(idAudio) {
  document.querySelector(idAudio).play();
  //código esta guardando entre parenteses para ser exectado apenas com a execução
}

const listaTeclas = document.querySelectorAll(".tecla");
//isto é uma referencia, o valor é constante pois não vai mudar

let i = 0;

while (i < listaTeclas.length) {
  const tecla = listaTeclas[i];

  const instrumento = tecla.classList[1];
  //na lista de classes, o 1 valor é o nome diferente das teclas (tecla_pom)
  //assim podemos acessar cada botão unico

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    batida(idAudio);
  };
  //uma função anonima
  i++;
  //console.log(i);
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
