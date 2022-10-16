const valueInMeters = prompt("Digite o valor de medida em metros:");

const choise = prompt(
  "Para qual unidade de medida deseja converter?" +
    "\n1) milímetro(mm)" +
    "\n2) centímetro(cm)" +
    "\n3) decímetro(dm)" +
    "\n4) decâmetro(dam)" +
    "\n5) hectômetro(hm)" +
    "\n6) quilômetro(km)"
);

switch (choise) {
  case "1":
    alert(valueInMeters + "m = " + valueInMeters * 1000 + "mm");
    break;
  case "2":
    alert(valueInMeters + "m = " + valueInMeters * 100 + "cm");
    break;
  case "3":
    alert(valueInMeters + "m = " + valueInMeters * 10 + "dm");
    break;
  case "4":
    alert(valueInMeters + "m = " + valueInMeters / 10 + "dam");
    break;
  case "5":
    alert(valueInMeters + "m = " + valueInMeters / 100 + "hm");
    break;
  case "6":
    alert(valueInMeters + "m = " + valueInMeters / 1000 + "km");
    break;
  default:
    alert("Opção inválida");
}
