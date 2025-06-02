let costPerGame = 1; // Стоимость по умолчанию
const slider = document.getElementById("victorySlider");
const victoryCountDisplay = document.getElementById("victoryCount");
const victoryCostDisplay = document.getElementById("victoryCost");
const totalCostDisplay = document.getElementById("totalCost");
const rankImages = document.querySelectorAll(".rank-image");
let currentRank = "";


function updateCost(rank) {
  switch (rank) {
    case "voin":
      costPerGame = 1;
      break;
    case "elita":
      costPerGame = 2;
      break;
    case "master":
      costPerGame = 2;
      break;
    case "grandmaster":
      costPerGame = 2;
      break;
    case "epic":
      costPerGame = 2;
      break;
    case "lega":
      costPerGame = 3;
      break;
    case "mif":
      costPerGame = 4;
      break;
    case "mifsl":
      costPerGame = 5;
      break;
    case "mifch":
      costPerGame = 5;
      break;
    default:
      costPerGame = 1;
  }
  victoryCostDisplay.textContent = costPerGame;
  totalCostDisplay.textContent = slider.value * costPerGame;
}

function calculate() {
  document.getElementById("boostResult").textContent =
    `Стоимость буста: ${slider.value * costPerGame} $`;
}

document.querySelector(".calculate").addEventListener("click", calculate);

rankImages.forEach((image) => {
  image.addEventListener("click", function () {
    if (currentRank && currentRank !== this.id) {
      document
        .querySelector(`#currentRankSelection .rank-image#${currentRank}`)
        .classList.remove("rank-selected");
    }
    updateCost(this.id);
    currentRank = this.id;
    document.querySelector(".order #current-image").src = this.src;
    document.querySelector(".order #current-image").classList.remove("hidden");
    document.getElementById("rankArrow").classList.remove("hidden");
    document
      .querySelector(`#currentRankSelection .rank-image#${currentRank}`)
      .classList.add("rank-selected");
  });
});

slider.oninput = function () {
  victoryCountDisplay.textContent = this.value;
  totalCostDisplay.textContent = this.value * costPerGame;
  count = this.value;
  document.querySelector(".desired-wins #desired").innerHTML = count;
  document.querySelector(".desired-wins #desired-title").innerHTML = "Игр";
  document.getElementById("rankArrow").classList.remove("hidden");
};

victoryCostDisplay.textContent = costPerGame;
totalCostDisplay.textContent = slider.value * costPerGame;


document.addEventListener('DOMContentLoaded', () => {
  const themeSelector = document.getElementById('theme-selector');
  const resetThemeButton = document.getElementById('reset-theme');

  
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      themeSelector.value = savedTheme;
  }

  
  themeSelector.addEventListener('change', (event) => {
      const selectedTheme = event.target.value;
      document.documentElement.setAttribute('data-theme', selectedTheme);
      localStorage.setItem('theme', selectedTheme);
  });

  
  resetThemeButton.addEventListener('click', () => {
      localStorage.removeItem('theme');
      document.documentElement.removeAttribute('data-theme');
      themeSelector.value = 'light';
  });
})