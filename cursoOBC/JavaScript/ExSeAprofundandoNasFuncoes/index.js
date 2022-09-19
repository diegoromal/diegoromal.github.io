let velocity = 150
let slowdown = 20

var loop = setInterval(function(){
  if (velocity <= "0") {
    velocity = 0
    clearInterval(loop)
    alert("A nave está parada e as comportas podem ser abertas!")
  } else {
    console.log("Velocidade atual: " + velocity + "km/s")
  }
  velocity -= slowdown;
}, 1000);