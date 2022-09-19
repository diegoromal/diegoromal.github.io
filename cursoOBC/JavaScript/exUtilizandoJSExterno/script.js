let nameOld = prompt("Digite o nome da pessoa mais velha: ");
let ageOld = prompt("Digite a idade da pessoa mais velha: ");

let nameYoung = prompt("Digite o nome da pessoa mais nova: ");
let ageYoung = prompt("Digite a idade da pessoa mais nova: ");

if (ageOld == ageYoung) {
  alert("As idades são iguais! Tente novamente!");
} else if (ageOld < ageYoung) {
  alert(`A pessoa ${nameOld} não é a mais velha! Tente novamente!`);
} else {
  let diff = (ageOld - ageYoung)
  alert(
    `Pessoa mais velha: ${nameOld} \nIdade: ${ageOld}
    \nPessoa mais nova: ${nameYoung} \nIdade: ${ageYoung}
    \nDiferença de idade: ${diff}`
  );
}