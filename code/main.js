import kaboom from "kaboom"
const {loadAsset} = require("./assets")
const {levelOne} = require("./levels")
const {addPlayer, addSword, spawnOgre, addDagger} = require("./objects")
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
spawnOgre(5,3, player,weapon)
spawnOgre(5,5, player)
spawnOgre(4,8,player)
spawnOgre(8,8,player)
//controls
playerControls(player, weapon)

//audio
pogaudio()


