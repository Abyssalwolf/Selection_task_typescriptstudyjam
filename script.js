const button = document.getElementById("color-changer");
const clickCounter = document.getElementById("click-counter");
let colors = ["#2196F3", "#F44336", "#000000"]; // Array of colors
let currentColorIndex = 0;
let clickCount = 0;

button.addEventListener("click", () => {
  button.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  clickCount++;
  clickCounter.textContent = clickCount;
});