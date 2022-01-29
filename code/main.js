import kaboom from "kaboom"
import bean from "./characters"

// initialize context
kaboom()

// load assets
//bean function
bean()
bean()
bean()
bean()
bean()


// See #SpriteAtlasData type for format spec
loadSpriteAtlas("sprites/dino.png", {
	"dino": {
		x: 0,
		y: 0,
		width: 144,
		height: 28,
		sliceX: 9,
		anims: {
				
		"idle": { 
			"from": 0, 
			"to": 3, 
			"speed": 3,
			"loop": true
		},
		"run": { 
			"from": 4,
			"to": 7,
			"speed": 10,
			"loop": true
		},
		"hit": 8
		},
	},
})

	

const player = add([
	sprite("dino", { anim: "idle" }),
  pos(center()),
	scale(5,5),
	area({ width: 12, height: 12, offset: vec2(0, 6) }),
])


player.play("idle")



//run dino



