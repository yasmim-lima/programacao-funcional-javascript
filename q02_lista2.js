//Programa para calcular a área de uma circunferência dado o valor do raio.

function areaCirc(r) {
  pi = 3.1415;
  return pi * r ** 2;
}

const raio = 4;
const resultado = areaCirc(raio);
const textResultado = `A área de uma circunferência de raio ${raio} é ${resultado}`;
console.log(textResultado);
