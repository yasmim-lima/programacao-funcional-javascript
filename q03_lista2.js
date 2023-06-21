//Programa para determinar se três valores passados podem representar um triângulo ou não.
//Para formar um triângulo, a soma de dois lados deve ser sempre maior que a medida do terceiro lado.

function ehTriangulo(x, y, z) {
  return x + y > z && x + z > y && y + z > x;
}

const l1 = 3;
const l2 = 4;
const l3 = 3;
const resultado = ehTriangulo(l1, l2, l3);

if (resultado) {
  console.log("É um triângulo ");
} else {
  console.log("Não é um triângulo");
}
