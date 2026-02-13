const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsDiv = document.getElementById("buttons");

// CREATE AUDIO TAGS IN DOM
sounds.forEach(sound => {
  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

// CREATE BUTTONS
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  buttonsDiv.appendChild(btn);
});

// STOP BUTTON
const stopBtn = document.createElement("button");
stopBtn.classList.add("btn");
stopBtn.innerText = "stop";
stopBtn.addEventListener("click", stopSounds);

buttonsDiv.appendChild(stopBtn);

// STOP ALL AUDIO
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
