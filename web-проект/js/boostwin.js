let costPerVictory = 1; // Стоимость по умолчанию
const slider = document.getElementById("victorySlider");
const victoryCountDisplay = document.getElementById("victoryCount");
const victoryCostDisplay = document.getElementById("victoryCost");
const totalCostDisplay = document.getElementById("totalCost");
const rankImages = document.querySelectorAll(".rank-image");
let currentRank = "";


function updateCost(rank) {
  switch (rank) {
    case "voin":
      costPerVictory = 1;
      break;
    case "elita":
      costPerVictory = 2;
      break;
    case "master":
      costPerVictory = 2;
      break;
    case "grandmaster":
      costPerVictory = 2;
      break;
    case "epic":
      costPerVictory = 2;
      break;
    case "lega":
      costPerVictory = 3;
      break;
    case "mif":
      costPerVictory = 4;
      break;
    case "mifsl":
      costPerVictory = 5;
      break;
    case "mifch":
      costPerVictory = 5;
      break;
    default:
      costPerVictory = 1;
  }
  victoryCostDisplay.textContent = costPerVictory;
  totalCostDisplay.textContent = slider.value * costPerVictory;
}

function calculate() {
  document.getElementById("boostResult").textContent =
    `Стоимость буста: ${slider.value * costPerVictory} $`;
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
  totalCostDisplay.textContent = this.value * costPerVictory;
  count = this.value;
  document.querySelector(".desired-wins #desired").innerHTML = count;
  document.querySelector(".desired-wins #desired-title").innerHTML = "Побед";
  document.getElementById("rankArrow").classList.remove("hidden");
};

victoryCostDisplay.textContent = costPerVictory;
totalCostDisplay.textContent = slider.value * costPerVictory;


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