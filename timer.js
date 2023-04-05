const gallery = document.querySelector('#imageGallery');
const images = gallery.querySelectorAll('img');
const timer = document.querySelector('#timer');

let currentImageIndex = 0;
let timerId;

function startTimer() {
  let remainingTime = 10;
  timer.textContent = remainingTime;

  timerId = setInterval(() => {
    remainingTime--;
    timer.textContent = remainingTime;
    
    if (remainingTime <= 0) {
      moveCarousel();
      remainingTime = 10;
    }
  }, 1000);
}

function moveCarousel() {
  images[currentImageIndex].classList.remove('active');
  
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  
  images[currentImageIndex].classList.add('active');
}

images[currentImageIndex].classList.add('active');
startTimer();

setInterval(() => {
  moveCarousel();
}, 5000);
