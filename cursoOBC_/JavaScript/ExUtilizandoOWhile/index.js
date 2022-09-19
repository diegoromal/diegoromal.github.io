let spaceship = prompt("Digite o nome da nave:")

let warpSpace = prompt("Deseja entrar em dobra espacial?\n 1 - Sim\n 2 - Não")

let warpCount = 0

while (warpSpace == "1") {
  warpCount += 1
  warpSpace = prompt("Deseja realizar a próxima dobra?\n 1 - Sim\n 2 - Não")
}

alert("Nave escolhida: " + spaceship + "\nNúmero de Dobras: " + warpCount)