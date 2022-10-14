let numberOne = prompt("Digite o primeiro valor: ");
let numberTwo = prompt("Digite o segundo valor:");

numberOne = parseFloat(numberOne);
numberTwo = parseFloat(numberTwo);

let sum = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;

alert(
  `Soma: ${sum} \nSubtração: ${subtraction} \nMultiplicação: ${multiplication} \nDivisão: ${division}`
);
