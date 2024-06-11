let slideIndex = 0;
const totalSlides = document.querySelectorAll(".news-item").length;
const visibleSlides = 2; // Number of visible slides
const containerWidth = document.querySelector(
  ".carousel-container"
).offsetWidth;
const slideWidth = containerWidth / visibleSlides - 30; // 20px for margin

function showSlides() {
  const slidePosition = -slideIndex * slideWidth;
  document.querySelector(
    ".carousel"
  ).style.transform = `translateX(${slidePosition}px)`;
}

function nextSlide() {
  if (slideIndex < totalSlides - visibleSlides) {
    slideIndex++;
  } else {
    slideIndex = 0; // Go back to the first slide
  }
  showSlides();
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = totalSlides - visibleSlides; // Go to the last visible slide
  }
  showSlides();
}

// Show all slides when the page loads
showSlides();
