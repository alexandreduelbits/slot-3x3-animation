const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");

const slot1FirstSelected = document.getElementById("slot1First");
const slot1SecondSelected = document.getElementById("slot1Second");
const slot1ThirdSelected = document.getElementById("slot1Third");

const slot2FirstSelected = document.getElementById("slot2First");
const slot2SecondSelected = document.getElementById("slot2Second");
const slot2ThirdSelected = document.getElementById("slot2Third");

const slot3FirstSelected = document.getElementById("slot3First");
const slot3SecondSelected = document.getElementById("slot3Second");
const slot3ThirdSelected = document.getElementById("slot3Third");

const icons = ["🎟️", "🍋", "👑", "⭐", "🎰", "🍀", "💎"];

let combinations = [
  [1, 3, 2],
  [6, 0, 4],
  [4, 1, 5],
  [0, 3, 3],
  [3, 6, 2],
  [5, 2, 5],
  [0, 1, 2],
  [6, 3, 0],
  [1, 0, 3],
  [5, 2, 4],
  [2, 5, 5],
  [4, 3, 1],
  [3, 4, 0],
  [0, 1, 6],
  [1, 0, 1],
  [5, 3, 5],
  [2, 6, 3],
  [3, 0, 0],
  [2, 2, 2],
];

function initSlots() {
  renderItems();
  const spinBtn = document.getElementById("spinBtn");

  spinBtn.addEventListener("click", spinSlots);
}

function renderItems() {
  slot1.innerHTML = "";
  slot2.innerHTML = "";
  slot3.innerHTML = "";

  for (const items of combinations) {
    slot1.appendChild(createSlotItem(items[0]));
    slot2.appendChild(createSlotItem(items[1]));
    slot3.appendChild(createSlotItem(items[2]));
  }
}

function spinSlots() {
  scrollTo(slot1, 0, 0);
  scrollTo(slot2, 0, 0);
  scrollTo(slot3, 0, 0);

  combinations[combinations.length - 3] = [
    +slot1FirstSelected.value,
    +slot2FirstSelected.value,
    +slot3FirstSelected.value,
  ];

  combinations[combinations.length - 2] = [
    +slot1SecondSelected.value,
    +slot2SecondSelected.value,
    +slot3SecondSelected.value,
  ];

  combinations[combinations.length - 1] = [
    +slot1ThirdSelected.value,
    +slot2ThirdSelected.value,
    +slot3ThirdSelected.value,
  ];

  renderItems(combinations);

  setTimeout(() => {
    const itemSize = 90; // size in px

    const position = itemSize * (combinations.length - 3);

    scrollTo(slot1, position, 0.6);
    scrollTo(slot2, position, 0.8);
    scrollTo(slot3, position, 1);
  }, 5);
}

/**
 *
 * @param {HTMLElement} slot1
 * @param {number} position
 * @param {number} delay
 */
function scrollTo(slot, position, delay) {
  slot.style.transition = `transform ${delay}s linear`;

  if (delay === 0) slot.style.transition = "none";

  slot.style.transform = `translateY(-${position}px)`;
}

function createSlotItem(item) {
  const slotItem = document.createElement("div");

  slotItem.classList.add("slot-item");
  slotItem.innerHTML = icons[item];

  return slotItem;
}

window.addEventListener("DOMContentLoaded", initSlots);
