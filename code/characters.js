import kaboom from "kaboom"

//random num
const random = (min = 0, max = 400) => {
    let num = Math.random() * (max - min) + min;

    return Math.floor(num);
};

export default function bean(){

  // add a character to screen
  loadSprite("bean", "sprites/bean.png")
const bomb = add([
	// list of components
	sprite("bean"),
	pos(random(0,400), random(0,400)),
	area(),
  "bean",
  "bomb"
])

// add a kaboom on mouse click
onClick("bean", (bomb) => {
	addKaboom(mousePos())
})

}

export function dino(){
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
  pos(random(0,400), random(0,400)),
	scale(5,5),
	area({ width: 12, height: 12, offset: vec2(0, 6) }),
])


player.play("idle")



}