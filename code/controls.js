import kaboom from "kaboom"

function playerControls(player, weapon){
var right = true
var space = false

  
//Inputs
  onKeyDown("space", () => {
    if(right){
      weapon.follow.offset = vec2(10, 15)
    }else{
      weapon.follow.offset = vec2(-10, 15)
    }
  })

  onKeyRelease("space", () => {
    if(right){
      weapon.follow.offset = vec2(-4, 15)
    }else{
      weapon.follow.offset = vec2(4, 15)
    }
  })

  const SPEED = 120

  const dirs = {
    "left": LEFT,
    "right": RIGHT,
    "up": UP,
    "down": DOWN,
  }

  player.onUpdate(() => {
    camPos(player.pos)
  })

  onKeyDown("right", () => {
    player.flipX(false)
    weapon.flipX(false)
    right = true
    player.move(SPEED, 0)
    
    weapon.follow.offset = vec2(-4, 15)
    // onKeyDown("space", () => {
    //   weapon.follow.offset = vec2(8, 15)
    // })

    
  })

  onKeyDown("left", () => {
    player.flipX(true)
    player.move(-SPEED, 0)
    weapon.flipX(true)
    right = false
    weapon.follow.offset = vec2(4, 15)
  })

  onKeyDown("up", () => {
    player.move(0, -SPEED)
  })

  onKeyDown("down", () => {
    player.move(0, SPEED)
  })

  onKeyPress(["left", "right", "up", "down"], () => {
    player.play("run")
  })

  onKeyRelease(["left", "right", "up", "down"], () => {
    if (
      !isKeyDown("left")
      && !isKeyDown("right")
      && !isKeyDown("up")
      && !isKeyDown("down")
    ) {
      player.play("idle")
    }
  })
}

export {playerControls}
