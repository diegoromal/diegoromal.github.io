const entryOne = prompt("Digite o primeiro número: ");
const entryTwo = prompt("Digite o segundo número:");

const numberOne = parseFloat(entryOne);
const numberTwo = parseFloat(entryTwo);

const sum = numberOne + numberTwo;
const subtraction = numberOne - numberTwo;
const multiplication = numberOne * numberTwo;
const division = numberOne / numberTwo;

alert(
  `Resultados:
  Soma: ${sum}
  Subtração: ${subtraction}
  Multiplicação: ${multiplication}
  Divisão: ${division}`
);
