console.log(document.querySelector('input[value="2"]'));
console.log(document.querySelector('input[type="tel"]'));

//para buscar o elemento preciso com o querySelector
console.log(document.querySelectorAll('input[type="button"]'));

// criando uma lista com TODOS os elementos de input do tipo 'button'
const listaDeTeclas = document.querySelectorAll('input[type="button"]');

// criando uma lista com TODOS os elementos de input do tipo 'tel'
const campoDigiteSeuTelefone = document.querySelectorAll('input[type="tel"]');

// capturando o elemento do input
const InputDigiteSeuTelefone = campoDigiteSeuTelefone[0];

//funcao para substituir o valor do input pelo valor da tecla digitada
// o "+=" impede que um número sobrescreva o outro, permitindo que o input mantenha o valor digitado anteriormente
function ImprimeValorNoInput(valorDaTecla) {
  InputDigiteSeuTelefone.value += valorDaTecla;
}

for (let i = 0; i < listaDeTeclas.length; i++) {
  // lista dos elementos de todas as teclas
  const tecla = listaDeTeclas[i];

  // captura o valor de todas as teclas
  const valorDaTecla = tecla.value;

  // chama a função assim que a tecla é pressionada
  tecla.onclick = function () {
    ImprimeValorNoInput(valorDaTecla);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

/* 
Um script que percorra a lista de teclas do telefone, e ao clicar em qualquer tecla do teclado,
 imprima o valor no campo Digite seu telefone.
*/
