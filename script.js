const pianoKeys = document.querySelectorAll(".piano-keys .key");

let allKeys = [];

// this creates a new audio element
// by default audio src is a tune
let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();


  //    select the key that was clicked
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");

  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

// iterating through a list
pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};

document.addEventListener("keydown", pressedKey);
