import kaboom from "kaboom"
const playerControls = require("./controls")
const {pogaudiosito,changuito} = require("./audio")

const playerHealth = 10
const ogreHealth = 4

function addPlayer(map){

  const player = add([
    pos(map.getPos(2, 2)),
    sprite("hero", { anim: "idle" }),
    area({ width: 12, height: 12, offset: vec2(0, 6) }),
    health(playerHealth),
    solid(),
    origin("center"),
  ])

  return player  
}
//position to spawn ogre
function spawnOgre(x,y, player,weapon){
  const ogre = add([
	sprite("ogre"),
	pos(map.getPos(x, y)),
	origin("bot"),
	area({ scale: 0.5 }),
  health(ogreHealth),
	solid(),

  "enemy"
])
//player touch
  player.onCollide("enemy", (ogre) => {
    player.hurt(1)
})
//sword attack
onCollide("dagger", "enemy", (weapon, ogre) => {
		ogre.hurt(1)
  
	})

on("death", "enemy", (e) => {
		destroy(e)
    shake(2)
    pogaudiosito()
		addKaboom(e.pos)
	})

}


function addSword(player){
  function spin() {
	let spinning = false
	return {
		id: "spin",
		update() {
			if (spinning) {
				this.angle += 1200 * dt()
				if (this.angle >= 360) {
					this.angle = 0
					spinning = false
				}
			}
		},
		spin() {
			spinning = true
		},
	}
}
  const sword = add([
	pos(),
	sprite("sword"),
	origin("bot"),
	rotate(0),
	follow(player, vec2(-4, 9)),
	spin(),
  area(),
  "sword",
])
  return sword
}
function addDagger(player){
  
  const dagger = add([
	pos(),
	sprite("dagger"),

	origin("bot"),
	rotate(0),
	follow(player, vec2(-4, 15)),
  area(),
  "dagger",
])
  return dagger
}

export {addPlayer, addSword, spawnOgre, addDagger}