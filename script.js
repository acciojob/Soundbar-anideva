const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsDiv = document.getElementById("buttons");

// create sound buttons
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");        // ⭐ REQUIRED CLASS
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();

    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  });

  buttonsDiv.appendChild(btn);
});

// stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("btn");      // ⭐ SAME CLASS
stopBtn.innerText = "stop";
stopBtn.addEventListener("click", stopSounds);

buttonsDiv.appendChild(stopBtn);


// stop all sounds
function stopSounds() {
  const audios = document.querySelectorAll("audio");

  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
//your JS code here. If required.
