const carName1 = prompt("Insira o nome do veículo 1:");
const velocity1 = prompt("Insira a velocidade do veículo 1:");

const carName2 = prompt("Insira o nome do veículo 2:");
const velocity2 = prompt("Insira a velocidade do veículo 2:");

if (velocity1 > velocity2) {
  alert(carName1 + " é mais rápido que " + carName2);
} else if (velocity2 > velocity1) {
  alert(carName2 + " é mais rápido que " + carName1);
} else {
  alert(carName1 + " e " + carName2 + " possuem a mesma velocidade!");
}
