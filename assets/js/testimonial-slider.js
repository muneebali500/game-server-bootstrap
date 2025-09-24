const list = document.querySelector(".testimonials-list");
const items = document.querySelectorAll(".testimonials-list li");
const prevBtn = document.querySelector(".nav-btns button:first-child");
const nextBtn = document.querySelector(".nav-btns button:last-child");

let currentIndex = 0;
const visibleCards = 3;
const totalCards = items.length;

if (totalCards <= visibleCards) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}

function updateSlider() {
  const cardWidth = items[0].offsetWidth;
  const offset = -(currentIndex * cardWidth);
  list.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});
