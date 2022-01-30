import kaboom from "kaboom"
const {loadAsset} = require("./assets")
const {levelOne} = require("./levels")
const {addPlayer, addSword, spawnOgre, spawnLizard, addDagger} = require("./objects")
const {playerControls} = require("./controls")
const {levelOneSpawn} = require("./spawn")
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
levelOneSpawn(player,weapon)
//controls
playerControls(player, weapon)

//audio
pogaudio()


