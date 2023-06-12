function calcularPromedio(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
      suma += notas[i];
  }
  const promedio = suma / notas.length;
  return promedio;
}
function imprimirResultado(promedio) {
  if (promedio < 5) {
      document.write(`Reprobado, su promedio es: ${promedio}`);
  } else if (promedio >= 6 && promedio <= 8) {
      document.write(`Aprobado, su promedio es: ${promedio}`);
  } else {
      document.write(`Sobresaliente, su promedio es: ${promedio}`);
  }
}
const notas = [];
n = prompt("Ingrese la cantidad de notas de evaluaciones que realizó en el trimestre", "...")
for (let i = 0; i < n; i++) {
  let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));

  while (nota < 0 || nota > 10) {
      nota = parseFloat(prompt(`Nota inválida. Ingrese la nota ${i + 1}:`));
  }
  notas.push(nota);
}
const promedioNotas = calcularPromedio(notas);
imprimirResultado(promedioNotas);