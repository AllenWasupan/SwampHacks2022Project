import kaboom from "kaboom"
const {loadAsset} = require("./assets")
const {levelOne} = require("./levels")
const {addPlayer, addSword, spawnOgre, spawnLizard, addDagger} = require("./objects")
const {playerControls} = require("./controls")
const {pogaudio} = require("./audio")
// const {control} = require("./controls")
// const {level} = require("./map")



loadAsset()

//LEVEL ONE
map = levelOne()
//spawn player
player = addPlayer(map)
// //equp sword
weapon = addDagger(player)
// //spawn enemy
//spawnOgre(5,4, player,weapon)
//spawnOgre(2,5, player,weapon)
spawnOgre(4,8,player,weapon)
spawnOgre(8,8,player,weapon)
spawnLizard(2,8,player,weapon)
//controls
playerControls(player, weapon)

//audio
pogaudio()


