const images = document.querySelectorAll(".image");
let currentImage = 0;

const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");

rightButton.addEventListener('click', moveRight);
leftButton.addEventListener('click', moveLeft);

function moveRight() { // I believe that this is the event *handler*, and the event listener has no binding.
  currentImage >= images.length - 1 ? changeImage(0) : changeImage(currentImage + 1);
}

function moveLeft() {
  console.log(currentImage);
  currentImage <= 0 ? changeImage(images.length - 1) : changeImage(currentImage - 1);
}

function changeImage(to) {
  Array.from(images).forEach(im => im.classList.remove("visible_image"));
  Array.from(images).forEach(im => im.classList.add("hidden_image"));
  images[to].classList.remove("hidden_image");
  images[to].classList.add("visible_image"); // perhaps this process could be optimised, bearing in mind CSS class precedence (a given thing can have two incompatible classes and the later declaration takes precedence)
  currentImage = to;
}

let play = setInterval(() => moveRight(), 5000);
let playing = true

const playPauseButton = document.getElementById("playPause");
playPauseButton.addEventListener('click', playPause);

function playPause() {
  playing ? clearInterval(play) : play = setInterval(() => moveRight(), 5000) ;
  playing = !playing;
}

dots.addEventListener('click', (e) => dotNav(e));

function dotNav(event) {
  let target = event.target;
  try {changeImage(target.innerText - 1)}
  catch(err) {changeImage(currentImage)}
}

/*
function dotNav(dotIndex){
  changeImage(dotIndex);
  // dots should be ordered list, so that they come out as a NodeList with indexes.
}
*/


/*
TODO: add dot navigation
TODO: see whether this works with differently-sized images. It might.
TODO: add caption support?
TODO: investigate using JS to animate the transtition??? Therefore going above and beyond the objectives of this expedition? For instance, you could send the old image 50000 pixels (maybe thats too much lol) to the left/right - but then how would you get the new one from the other side??
TODO: style buttons
TODO: make mobile-friendly controls. I believe there's some kind of touch event. You can set controls to display: none; on mobile version, and add event listeners for swipes left and right (I hope)
*/
