const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display"); 

pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector("audio");
    audio.currentTime = 0;
    audio.play();

    display.innerText = pad.id;
  });
});

document.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toUpperCase();
  
  const audio = document.getElementById(keyPressed);
  
  if (audio) {
  audio.currentTime = 0;
  audio.play();
  display.innerText = audio.parentElement.id;
}

})
