const images = document.querySelectorAll(".image");
let currentImage = 0; // should start at 0;

function changeImage(to) {
  Array.from(images).forEach(im => im.classList.remove("visible_image"));
  Array.from(images).forEach(im => im.classList.add("hidden_image"));
  images[to].classList.remove("hidden_image");
  images[to].classList.add("visible_image"); // perhaps this process could be optimised, bearing in mind CSS class precedence (a given thing can have two incompatible classes and the later declaration takes precedence)
  currentImage = to;
}

const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");

rightButton.addEventListener('click', moveRight);
leftButton.addEventListener('click', moveLeft);

function moveRight() {
  currentImage >= images.length - 1 ? changeImage(0) : changeImage(currentImage + 1);
}

function moveLeft() {
  console.log(currentImage);
  currentImage <= 0 ? changeImage(images.length - 1) : changeImage(currentImage - 1);
}

const playPauseButton = document.getElementById("playPause");
playPauseButton.addEventListener('click', playPause);
let play = setInterval(() => moveRight(), 5000);
let playing = true

function playPause() {
  playing ? clearInterval(play) : play = setInterval(() => moveRight(), 5000) ;
  playing = !playing;
}

/*
function dotNav(dotIndex){
  changeImage(dotIndex);
}
*/
