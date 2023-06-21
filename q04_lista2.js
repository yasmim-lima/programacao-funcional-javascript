//Programa para classificar um triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus
//três lados.

function ehTriangulo(x, y, z) {
  return x + y > z && x + z > y && y + z > x;
}

function tipoTriangulo(x, y, z) {
  if (x == y && y == z) return "Triângulo Equilátero";
  else if (x != y && x != z && y != z) return "Triângulo Escaleno";
  else return "Triângulo Isósceles";
}

const l1 = 3;
const l2 = 5;
const l3 = 5;
const resultado = tipoTriangulo(l1, l2, l3);

if (ehTriangulo(l1, l2, l3)) {
  console.log(resultado);
} else {
  console.log("Não é um triângulo");
}
