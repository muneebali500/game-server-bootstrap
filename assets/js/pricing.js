const slider = document.getElementById("slotSlider");
const pricePoints = document.querySelectorAll(".price-point");
const totalAmount = document.querySelector(".total-amount");
const sliderTrack = document.querySelector(".slider-track");

const prices = ["Free", "$10", "$69", "$100", "$150", "$250"];
const totalPrices = ["$0", "$12", "$71", "$102", "$152", "$252"];

function updateSlider() {
  const value = parseInt(slider.value);
  const percentage = (value / 5) * 100;

  // Update track gradient
  sliderTrack.style.background = `linear-gradient(90deg, #6366f1 0%, #6366f1 ${percentage}%, #374151 ${percentage}%, #374151 100%)`;

  // Update active price point
  pricePoints.forEach((point, index) => {
    point.classList.toggle("active", index === value);
  });

  // Update total price
  totalAmount.textContent = totalPrices[value];
}

slider.addEventListener("input", updateSlider);

// Initialize
updateSlider();

// Handle click on price points
pricePoints.forEach((point, index) => {
  point.addEventListener("click", () => {
    slider.value = index;
    updateSlider();
  });
});

// duration section functionality
const durationBtns = document.querySelectorAll(".duration-btn");
const locationBtns = document.querySelectorAll(".location-btn");

checkButton(durationBtns);
checkButton(locationBtns);

function checkButton(dataBtns) {
  dataBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      dataBtns.forEach((dBtn) => {
        if (dBtn.classList.contains("active")) {
          dBtn.classList.remove("active");
          return;
        }
      });

      btn.classList.add("active");
    });
  });
}
