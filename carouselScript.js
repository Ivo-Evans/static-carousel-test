const images = document.querySelectorAll(".image");
let currentImage = 0;

function changeImage(to) {
  Array.from(images).forEach(im => im.classList.remove("visible_image"));
  Array.from(images).forEach(im => im.classList.add("hidden_image"));
  images[to].classList.remove("hidden_image");
  images[to].classList.add("visible_image"); // perhaps this process could be optimised, bearing in mind CSS class precedence (a given thing can have two incompatible classes and the later declaration takes precedence)
  currentImage = to;
}

const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");

leftButton.addEventListener('click', () => (changeImage(currentImage - 1)));
rightButton.addEventListener('click', () => (changeImage(currentImage + 1)));

// basic plan successful. Now make a moveLeft and moveRight function, associated with addEventListener. The functions should take no argument. They should see whether currentImage < images.length. If it is, call changeImage(currentImage plus or minus 1). If it isn't, set currentImage to the last index and then call changeImage. Since there is significant common ground between these consequents, it might be better to use a single conditional, like so:
/*
function moveRight() {
  if (currentImage >= images.length) {currentImage = -1};
  changeImage(currentImage + 1);
}

function moveLeft() {
  if (currentImage <= 0) {currentImage = images.length};
  changeImage(currentImage - 1);
} // in both these conditions, it is the 'equal to' that I expect to do all the work. 

function dotNav(dotIndex){
  changeImage(dotIndex);
}
*/
