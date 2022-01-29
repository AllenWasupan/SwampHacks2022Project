import kaboom from "kaboom"

function playerControls(player, weapon){

  
//Inputs
  onKeyPress("space", () => {
    let interacted = false
    every("chest", (c) => {
      if (player.isTouching(c)) {
        if (c.opened) {
          c.play("close")
          c.opened = false
        } else {
          c.play("open")
          c.opened = true
        }
        interacted = true
      }
    })
    if (!interacted) {
      
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
    player.move(SPEED, 0)
    weapon.follow.offset = vec2(-4, 15)
  })

  onKeyDown("left", () => {
    player.flipX(true)
    //sword.flipX(true)
    player.move(-SPEED, 0)
    weapon.flipX(true)
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
