// Escreva um programa que dados o primeiro nome e o último sobrenome de uma pessoa qualquer, retorne-os em
// forma de citação bibliográfica conforme exemplo: Fulano Santos --> Santos, Fulano.

function citacao(x, y) {
  const citacao = `${y}, ${x}.`;
  return citacao;
}

const nome = "Fulano";
const sobrenome = "Santos";
const resultado = citacao(nome, sobrenome);
console.log(resultado);
