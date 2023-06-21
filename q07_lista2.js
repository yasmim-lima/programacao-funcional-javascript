//Programa para retornar o menor valor entre três números quaisquer.Tente resolver considerando o sub-problema
//de determinar o menor valor entre dois números quaisquer(obs: em caso de valores iguais, deve-se retornar
//como resultado o próprio valor).

function menorDoisNum(x, y) {
  if (x > y) return y;
  else return x;
}

const num1 = 5;
const num2 = 1;
const num3 = 2;
const menorTresNum = menorDoisNum(menorDoisNum(num1, num2), num3);
const textResult = `O menor número é ${menorTresNum}`;
console.log(textResult);
