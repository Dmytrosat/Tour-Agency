const buyTours = [
  {
    name: "Mystical Bali Adventure",
    price: 2000,
    duration: 7,
    description: "Congratulations! You bought the tour",
  },
  {
    name: "Futuristic Tokyo Odyssey",
    price: 2000,
    duration: 7,
    description: "Congratulations! You bought the tour",
  },
  {
    name: "Majestic African Safari",
    price: 3000,
    duration: 10,
    description: "Congratulations! You bought the tour",
  },
  {
    name: "Vibrant Rio de Janeiro Carnival",
    price: 2500,
    duration: 5,
    description: "Congratulations! You bought the tour",
  },
  {
    name: "Alaskan Wilderness Expedition",
    price: 3500,
    duration: 10,
    description: "Congratulations! You bought the tour",
  },
  {
    name: "Enigmatic Egyptian Odyssey",
    price: 1800,
    duration: 8,
    description: "Congratulations! You bought the tour",
  },
  {
    name: "Mystical Machu Picchu Trek",
    price: 2200,
    duration: 9,
    description: "Congratulations! You bought the tour",
  },
  {
    name: "Scenic New Zealand Adventure",
    price: 2800,
    duration: 12,
    description: "Congratulations! You bought the tour",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll(".tour-card__button-buy");
  const modal = document.getElementById("tourModal");
  const closeModal = document.querySelector(".close");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalDuration = document.getElementById("modalDuration");
  const modalDescription = document.getElementById("modalDescription");

  // buyButtons
  buyButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const tour = buyTours[index];
      modalTitle.textContent = tour.name;
      modalPrice.textContent = tour.price;
      modalDuration.textContent = tour.duration;
      modalDescription.textContent = tour.description;
      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
