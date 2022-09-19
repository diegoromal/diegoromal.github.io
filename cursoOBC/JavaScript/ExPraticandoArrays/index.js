const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]

let with9Crew = hitchedSpaceships.filter(element => {return element[1] > 9})
nameWith9Crew = []
for (let c = 0; c < with9Crew.length; c++) {
  nameWith9Crew.push(with9Crew[c][0])
}

let firstPlatform = (hitchedSpaceships.findIndex(element => {return element[2] == false})) + 1

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship) {
  let upcased = currentSpaceship[0].toUpperCase()
  return upcased
})

alert("Naves com mais de 9 tripulantes: " + nameWith9Crew.join(", ") +
      "\nPrimeira plataforma com engate pendente: " + firstPlatform +
      "\nNomes das naves: " + upcasedSpaceships.join(", "))