const gallery = document.querySelector(".gallery");
const galleryContainer = gallery.querySelector(".gallery-container");
const images = galleryContainer.querySelectorAll("img");
const slideContainer = document.createElement("div");
slideContainer.classList.add("slide-container");
document.body.appendChild(slideContainer);

let currentIndex = 0;

function showSlide(index) {
  const slideImage = document.createElement("img");
  slideImage.src = images[index].src;
  slideContainer.innerHTML = "";
  slideContainer.appendChild(slideImage);
  slideContainer.classList.add("active");
  currentIndex = index;
}

function hideSlide() {
  slideContainer.classList.remove("active");
}

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    showSlide(index);
  });
});

function changeImage(index) {
    images[currentIndex].style.display = "none";
    images[index].style.display = "block";
    currentIndex = index;
  }
  

document.addEventListener("keydown", (event) => {
  if (slideContainer.classList.contains("active")) {
    if (event.keyCode === 37) { // lewa strzałka
      event.preventDefault();
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = images.length - 1;
      }
      document.addEventListener("keydown", (event) => {
        if (event.keyCode === 37) { // lewa strzałka
          event.preventDefault();
          if (currentIndex > 0) {
            changeImage(currentIndex - 1);
          }
        } else if (event.keyCode === 39) { // prawa strzałka
          event.preventDefault();
          if (currentIndex < images.length - 1) {
            changeImage(currentIndex + 1);
          }
        }
      });
      
    }
  }
});

slideContainer.addEventListener("click", () => {
  hideSlide();
});
