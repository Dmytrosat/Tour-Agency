const tours = [
  {
    name: "Mystical Bali Adventure",
    description:
      "Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.",
    price: 2000,
    duration: 7,
  },
  {
    name: "Futuristic Tokyo Odyssey",
    description:
      "Discover the captivating blend of tradition and innovation in Tokyo. Experience the city's bustling streets and neon-lit nights, visit ancient temples and shrines, and savor the exquisite flavors of Japanese cuisine.",
    price: 2000,
    duration: 7,
  },
  {
    name: "Majestic African Safari",
    description:
      "Embark on a thrilling journey through the African wilderness, where you'll encounter diverse wildlife, breathtaking landscapes, and vibrant cultures. Discover the untamed beauty of the African savanna.",
    price: 3000,
    duration: 10,
  },
  {
    name: "Vibrant Rio de Janeiro Carnival",
    description:
      "Experience the energy and excitement of Rio de Janeiro's world-famous Carnival, where colorful parades, pulsating samba rhythms, and lively street parties come together in a dazzling celebration of life.",
    price: 2500,
    duration: 5,
  },
  {
    name: "Alaskan Wilderness Expedition",
    description:
      "Immerse yourself in the rugged beauty of Alaska, a land of towering mountains, pristine glaciers, and lush forests. Explore untouched wilderness, witness awe-inspiring wildlife, and experience unforgettable adventures.",
    price: 3500,
    duration: 10,
  },
  {
    name: "Enigmatic Egyptian Odyssey",
    description:
      "Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.",
    price: 1800,
    duration: 8,
  },
  {
    name: "Mystical Machu Picchu Trek",
    description:
      "Venture deep into the heart of the Andes, where you'll uncover the ancient secrets of Machu Picchu, the lost city of the Incas. Hike through breathtaking landscapes and immerse yourself in the rich history and culture of Peru.",
    price: 2200,
    duration: 9,
  },
  {
    name: "Scenic New Zealand Adventure",
    description:
      "Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.",
    price: 2800,
    duration: 12,
  },
];
// Відсортуйте тури за ціною в порядку зростання та виведіть відсортований масив у консоль.
// const sortedTours = tours.sort((a, b) => b.price - a.price);
// console.log(sortedTours);
//Знайдіть та виведіть в консоль тур з найменшою тривалістю.
// const shortestTour = tours.reduce((mintour, currenttour) => {
//     return currenttour.duration < mintour.duration ? currenttour : mintour;
// });
// console.log(shortestTour);
// Виведіть у консоль у рядок тільки назви турів через кому
// const tourNames = tours.map((tour) => tour.name).join(', ');
// console.log(tourNames);

//Створіть функцію, яка приймає максимальну ціну та повертає новий масив, що містить лише ті тури, ціна яких не перевищує максимальну. Виведіть результат функції для максимальної ціни 2500 у консоль.
function filterToursByMaxPrice(maxPrice) {
  return tours.filter((tour) => tour.price <= maxPrice);
}
console.log(filterToursByMaxPrice(2500));

// Відсортуйте тури за назвою в порядку зростання та виведіть відсортований масив у консоль.
const sortedToursByName = tours.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedToursByName);
