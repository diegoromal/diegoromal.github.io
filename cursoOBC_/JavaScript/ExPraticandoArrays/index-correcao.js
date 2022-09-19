const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]

let nameWith9Crew = hitchedSpaceships.filter(element => {
  return element[1] > 9
}).map(element => {
  return element[0]
})

let firstPlatform = hitchedSpaceships.findIndex(element => {
  return element[2] == false
})

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship) {
  return currentSpaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + nameWith9Crew.join(", ")
message += "\nPlataforma com processo de engatre: " + (firstPlatform + 1)
message += "\nEspaçonaves destacadas: " + upcasedSpaceships.join(", ")

alert(message)