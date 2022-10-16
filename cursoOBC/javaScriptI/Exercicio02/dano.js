// atacante
const attacker = prompt("Insira o nome do personagem atacante:");
const attackPower = prompt("Qual é o seu poder de ataque?");
// defensor
const defender = prompt("Insira o nome do personagem defensor:");
let healthPoints = prompt("Quantos pontos de vida ele possui?");
const defensePower = prompt("Qual é o seu poder de defesa?");
const hasShield = prompt("Ele possui escudo? (Sim/Não)");

let damageDone = 0;

if (attackPower > defensePower && hasShield === "Não") {
  damageDone = attackPower - defensePower;
} else if (attackPower > defensePower && hasShield === "Sim") {
  damageDone = (attackPower - defensePower) / 2;
}

healthPoints -= damageDone;

alert(attacker + " causou " + damageDone + " pontos de dano em " + defender);
alert(
  "Atacante: " +
    attacker +
    "\nPoder de ataque: " +
    attackPower +
    "\n\nDefensor: " +
    defender +
    "\nPontos de vida: " +
    healthPoints +
    "\nPoder de defesa: " +
    defensePower +
    "\nPossui escudo: " +
    hasShield
);

// // personagem 1
// const characterName1 = prompt("Insira o nome do primeiro personagem:");
// const inputAttackPower1 = prompt(
//   "Insira o poder de ataque do primeiro personagem:"
// );
// const attackPower1 = parseFloat(inputAttackPower1);

// // personagem 2
// const characterName2 = prompt("Insira o nome do segundo personagem:");
// const inputHealthPoints2 = prompt(
//   "Digite os pontos de vida do segundo personagem:"
// );
// const healthPoints2 = parseFloat(inputHealthPoints2);
// const inputDefensePower2 = prompt(
//   "Insira o poder de ataue do primeiro personagem:"
// );
// const defensePower2 = parseFloat(inputDefensePower2);
// const hasShield2 = confirm("O segundo personagem possui escudo?");

// // calculo de dano
// let damageDone = 0;
// if (attackPower1 > defensePower2 && hasShield2 === false) {
//   damageDone = attackPower1 - defensePower2;
// } else if (attackPower1 > defensePower2 && hasShield2 === true) {
//   damageDone = (attackPower1 - defensePower2) / 2;
// } else if (attackPower1 <= defensePower2) {
//   damageDone = 0;
// }

// // atualizando informaçoes
// const newHealthPoints2 = healthPoints2 - damageDone;

// // impressão na tela das informações atuais
// alert(
//   "Total de dano: " +
//     damageDone +
//     "\n\nPersonagem 1:" +
//     "\nNome: " +
//     characterName1 +
//     "\nPontos de ataque: " +
//     attackPower1 +
//     "\n\nPersonagem 2:" +
//     "\nNome: " +
//     characterName2 +
//     "\nPontos de defesa: " +
//     defensePower2 +
//     "\nPontos de vida: " +
//     newHealthPoints2 +
//     "\nPossui escudo: " +
//     hasShield2
// );
