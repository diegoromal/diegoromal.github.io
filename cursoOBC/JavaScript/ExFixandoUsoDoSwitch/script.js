let lightYear = prompt("Qual a distância em anos luz? ")

let option = prompt("Como você deseja visualizar a convesão?\n 1 - Parsec(pc)\n" +
                    " 2 - Unidade astronômica(AU)\n 3 - Quilômetros(km)")

let unity
let conversion

switch (option) {
  case "1":
    unity = "Parsec"
    conversion = (lightYear * 0.306601) + " pc"
    break
  case "2":
    unity = "Unidade astronômica"
    conversion = (lightYear * 63241.1) + " AU"
    break
  case "3":
    unity = "Quilômetros"
    conversion = (lightYear * (9.5 * Math.pow(10, 12))) + " km"
    break
  default:
    unity = "Unidade não identificada"
    conversion = "Conversão fora do escopo"
    break
}

alert("Distância em Anos-Luz: " + lightYear + "\n" + unity + ": " + conversion)