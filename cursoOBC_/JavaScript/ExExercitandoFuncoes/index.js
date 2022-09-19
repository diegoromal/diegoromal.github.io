let spaceship = prompt('Qual o nome da nave?')

let velocity = 0

function menu() {
  let option = 0
  while (option == 0) {
    option = prompt('Escolha uma das opções:\n 1 - Acelerar a nave em 5km/s' +
                      '\n 2 - Desacelerar em 5km/s\n 3 - Imprimir dados de bordo' +
                      '\n 4 - Sair do programa')
    switch (option) {
      case "1":
        break
      case "2":
        break
      case "3":
        break
      case "4":
        break
      default:
        option = 0
    }
  }
  return option
}

function menuAction(choice) {
  if (choice == "1") {
    velocity += 5
    menuAction(menu())
  } else if (choice == "2") {
    if (velocity > 0) {
      velocity -= 5
      menuAction(menu())
    } else {
      velocity = 0
      menuAction(menu())
    }
  } else if (choice == "3") {
    alert(`Nome da nave: ${spaceship}\nVelocidade atual: ${velocity}`)
    menuAction(menu())
  } else if (choice == "4") {
    alert('Você escolheu sair!')
  }
}

menuAction(menu())