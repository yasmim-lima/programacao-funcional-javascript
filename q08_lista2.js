//Escrever um programa que calcule o valor de um número elevado à quarta potência. Tente fazer uso do
//sub - problema de calcular o quadrado de um número qualquer.

function quadrado(x) {
  return x * x;
}

const num = 2;
const resultado = quadrado(quadrado(num));
const textResult = `O número ${num} elevado à quarta potência é igual a ${resultado}`;
console.log(textResult);
