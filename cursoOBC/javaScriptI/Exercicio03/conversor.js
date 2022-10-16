const inputValueInMeters = prompt("Digite o valor de medida em metros:");
const valueInMeters = parseFloat(inputValueInMeters);

const inputChoise = prompt(
  "Para qual unidade de medida deseja converter? \n1) milímetro(mm)" +
    "\n2) centímetro(cm) \n3) decímetro(dm) \n4) decâmetro(dam)" +
    "\n5) hectômetro(hm) \n6) quilômetro(km)"
);
const choise = parseInt(inputChoise);

result = 0;

switch (choise) {
  case 1:
    result = valueInMeters * 1000;
    alert(valueInMeters + "m são " + result + "mm");
    break;
  case 2:
    result = valueInMeters * 100;
    alert(valueInMeters + "m são " + result + "cm");
    break;
  case 3:
    result = valueInMeters * 10;
    alert(valueInMeters + "m são " + result + "dm");
    break;
  case 4:
    result = valueInMeters / 10;
    alert(valueInMeters + "m são " + result + "dam");
    break;
  case 5:
    result = valueInMeters / 100;
    alert(valueInMeters + "m são " + result + "hm");
    break;
  case 6:
    result = valueInMeters / 1000;
    alert(valueInMeters + "m são " + result + "km");
    break;
  default:
    alert("Opção inválida");
}
