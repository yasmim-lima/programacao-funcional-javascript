//Programa para calcular a área de um retângulo dados os comprimentos de duas arestas

function areaRet(x, y) {
  return x * y;
}

const lado1 = 5;
const lado2 = 3;
const resultado = areaRet(lado1, lado2);
const textoRet = `retângulo de lados ${lado1} e ${lado2}`;
const textoArea = `A área de um ${textoRet} é ${resultado}`;
console.log(textoArea);
