let spaceship = prompt("Digite o nome da Nave:")

let newSpaceship = ""

for (let c = spaceship.length - 1; c >= 0; c--) {
  if (spaceship[c] == "e") {
    break
  }
  newSpaceship += spaceship[c]
}

alert("Nome original da nave: " + spaceship + "\nNome após ocultação: " + newSpaceship)