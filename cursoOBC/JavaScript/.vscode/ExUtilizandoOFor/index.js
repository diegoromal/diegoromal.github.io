let spaceship = prompt("Digite o nome da Nave:")

let oldChar = prompt("Qual caracter deseja substituir?")

let newChar = prompt("Por qual caracter deseja trocar?")

let newSpaceship = ""

for(let c = 0; c < spaceship.length; c++) {
  if(spaceship[c] == oldChar) {
    newSpaceship += newChar
  } else {
    newSpaceship += spaceship[c]
  }
}

alert("O novo nome da nave é: " + newSpaceship)