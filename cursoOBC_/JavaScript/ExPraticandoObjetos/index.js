let spaceship = {
  name: prompt("Digite o nome da EspaçoNave:"),
  type: prompt("Qual o tipo da nave?"),
  maxVelocity: parseInt(prompt("Digite a velocidade máxima:")),
  actualVelocity: 0
}

do {
  menuOption = prompt(`Escolha uma opção: \n1-Acelerar ${spaceship.name} \n2-Parar`)
  if (menuOption == 1) {
    let aceleration = parseInt(prompt("Quanto deseja acelerar?"))
    if (spaceship.actualVelocity <= spaceship.maxVelocity) {
      spaceship.actualVelocity += aceleration
    } else {
      alert(`Velocidade atual: ${spaceship.actualVelocity}km/s \nVelocidade máxima permitida: ${spaceship.maxVelocity}km/s`)
    }
  } else if (menuOption == 2) {
    alert(`Nome: ${spaceship.name} \nTipo: ${spaceship["type"]} \nVelocidade atual: ${spaceship.actualVelocity}km/s`)
  }
} while (menuOption != 2)