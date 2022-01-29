import kaboom from "kaboom"

function levelOne(){
  addLevel([
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxx            ",
  "           xxxxxx            ",
	"           xxxxxx          $ ",
	"                             ",
	"                             ",
	"       $              $      ",
	"                             ",
	"           xxxxxx            ",
	"           xxxxxx            ",
	"xxxxxxxxxxxxxxxxx            ",
	"xxxxxxxxxxxxxxxxx            ",
	"xxxxxxxxxxxxxxxxx            ",
  "xxxxxxxxxxxxxxxxx          $ ",
  "xxxxxxxxxxxxxxxxx            ",
  "xxxxxxxxxxxxxxxxx            ",
  "xxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxx",
  "xxxxxxx                        xxxxxx",
  "xxxxxxx                        xxxxxx",
  "xxxxxxx            $           xxxxxx",
  "xxxxxxx                        xxxxxx",
  "xxxxxxx                        xxxxxx",
  "xxxxxxx       $                xxxxxx",
  "xxxxxxx                        xxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
], {
  //Floor block dimension
	width: 16,
	height: 16,
	" ": () => [
		sprite("floor", { frame: ~~rand(0, 8) }),
	],
})

// objects
const map = addLevel([
	"ttttttttttt      tttttttttttt",
	"cwwwwwwwwwwl     cwwwwwwwwwwd",
	"l          atttttl          r",
	"l          wwwwww           r",
	"l                           r",
	"l     $                     r",
	"l          tttttt           r",
	"l          cwwwwwl          r",
	"atttttttttb      l          r",
	"wwwwwwwwwww      l     $    r",
  "                 l          r",
  "                 l          r",
  "                 l          r",
  "                 l          r",
  "                 attttttt  tb",
  "                 wwwwwwww  ww",
  "       ttttttttttttttttttlrttttxxxxxx",
  "       cwwwwwwwwwwwwwwwwwlrwwwdxxxxxx",
  "xxxxxxxl                      rxxxxxx",
  "xxxxxxxl                      rxxxxxx",
  "xxxxxxxl                      rxxxxxx",
  "xxxxxxxl                      rxxxxxx",
  "xxxxxxxl                      rxxxxxx",
  "xxxxxxxattttttttttttttttttttttbxxxxxx",
  "xxxxxxxwwwwwwwwwwwwwwwwwwwwwwwwxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
], {
	width: 16,
	height: 16,
	"$": () => [
		sprite("chest"),
		area(),
		solid(),
		{ opened: false, },
		"chest",
	],
	"a": () => [
		sprite("wall_botleft"),
		area({ width: 4 }),
		solid(),
	],
	"b": () => [
		sprite("wall_botright"),
		area({ width: 4, offset: vec2(12, 0) }),
		solid(),
	],
	"c": () => [
		sprite("wall_topleft"),
		area(),
		solid(),
	],
	"d": () => [
		sprite("wall_topright"),
		area(),
		solid(),
	],
	"w": () => [
		sprite("wall"),
		area(),
		solid(),
	],
	"t": () => [
		sprite("wall_top"),
		area({ height: 4, offset: vec2(0, 12) }),
		solid(),
	],
	"l": () => [
		sprite("wall_left"),
		area({ width: 4, }),
		solid(),
	],
	"r": () => [
		sprite("wall_right"),
		area({ width: 4, offset: vec2(12, 0) }),
		solid(),
	],
})

  return map
}

  // objects

export {levelOne}