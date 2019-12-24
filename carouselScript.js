const images = document.querySelectorAll(".image");
const currentImage = 0;

function changeImage(to) {
  Array.from(images).forEach(im => im.classList.remove("visible_image"));
  Array.from(images).forEach(im => im.classList.add("hidden_image"));
  images[to].classList.remove("hidden_image");
  images[to].classList.add("visible_image");
}

const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");

leftButton.addEventListener('click', () => (changeImage(currentImage - 1)));
rightButton.addEventListener('click', () => (changeImage(currentImage + 1)));
