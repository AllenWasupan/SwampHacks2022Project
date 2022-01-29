import kaboom from "kaboom"


function pogaudio() {
  loadSound("Music", "/sounds/medieval.mp3")
  // play() to play audio
  // (This might not play until user input due to browser policy)
  const music = play("Music", {
    loop: true,
  })
  onKeyPress("m", () => {
    if (music.isPaused()) {
      music.play()
    } else {
      music.pause()
    }
  })
  // Adjust global volume
  volume(0.5)
}

function pogaudiosito() {
  loadSound("OgreDeath", "/sounds/die.mp3")
  // play() to play audio
  // (This might not play until user input due to browser policy)
  play("OgreDeath")

}

 function changuito() {
  loadSound("open_chest", "/sounds/chest_open.mp3")
  // play() to play audio
  // (This might not play until user input due to browser policy)
  play("open_chest")

}

export {pogaudio,pogaudiosito,changuito}

