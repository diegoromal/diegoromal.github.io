let pilotName = prompt("Qual seu nome piloto? ")
let velocity = 0
let velocityChosen = prompt("Qual velocidade gostaria de acelerar a nave?")
let velocityConfirmation = confirm("Confirma que quer a velocidade " + velocityChosen + "km/s ?")

if (velocityConfirmation) {
  velocity = velocityChosen
}
if (velocity <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade!")
} else if (velocity < 40) {
  alert("Você está devagar. Podemos aumentar mais!")
} else if (velocity < 80) {
  alert("Parece ser uma boa velocidade para manter!")
} else if (velocity < 100) {
  alert("Velocidade alta. Considere diminuir!")
} else {
  alert("Velocidade perigosa. Controle automático forçado!")
}
alert("Piloto: " + pilotName + "\nVelocidade atual: " + velocity + "km/s")