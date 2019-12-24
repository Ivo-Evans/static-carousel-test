const images = document.querySelectorAll(".image");
const currentImage = 0;

function changeImage(to) {
  Array.from(images).forEach(im => im.classList.remove("visible_image"))
}
