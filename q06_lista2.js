//Fornecidos três valores, a, b e c, escreva um programa que retorne quantos dos três são iguais. A resposta
//pode ser 3(todos iguais), 2(apenas um diferente) ou 0(todos diferentes).

function quantosIguais(x, y, z) {
  if (x == y && y == z) return 3;
  else if (x != y && x != z && y != z) return 0;
  else return 2;
}

const a = 5;
const b = 5;
const c = 2;
const resultado = quantosIguais(a, b, c);
const textResult = `${resultado} dos três valores são iguais`;

console.log(textResult);
