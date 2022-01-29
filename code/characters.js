import kaboom from "kaboom"

//random num
const random = (min = 0, max = 400) => {
    let num = Math.random() * (max - min) + min;

    return Math.floor(num);
};

export default function bean(){

  // add a character to screen
  loadSprite("bean", "sprites/bean.png")
const player = add([
	// list of components
	sprite("bean"),
	pos(random(0,400), random(0,400)),
	area(),
  "bean",
  "player"
])

// add a kaboom on mouse click
onClick("bean", (player) => {
	addKaboom(mousePos())
})

}

export