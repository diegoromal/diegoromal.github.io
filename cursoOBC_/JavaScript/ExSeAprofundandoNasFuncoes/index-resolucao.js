function SlowDown(velocity, printer) {
  let decelaration = 20

  while (velocity > 0) {
    printer(velocity)
    velocity -= decelaration
  }

  alert("Nave parada. As comportas podem ser abertas.")
}

let SpaceshipVelocity = 150

SlowDown(SpaceshipVelocity, function(velocity) {
  console.log(`Velocidade atual: ${velocity}`)
})