let firstName = prompt("Digite seu primeiro nome:");
let lastName = prompt("Digite seu sobrenome:");
let fieldOfStudy = prompt("Digite seu campo de estudo:");
let yearOfBirth = prompt("Digite seu ano de nascimento:");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

let age = currentYear - yearOfBirth;

alert(
  `Nome: ${firstName} ${lastName} \nCampo de estudo: ${fieldOfStudy} \nIdade: ${age}`
);
