let currentRank = "";
let desiredRank = "";

function calculateBoost() {
  if (!currentRank || !desiredRank) {
    alert("Please select current and desired ranks.");
    return;
  }

  const rankPrices = {
    iron: 1,
    bronze: 2,
    silver: 3,
    gold: 4,
    platinum: 5,
    diamond: 6,
    ascendant: 7,
    immortal: 8,
    radiant: 9,
  };

  const rrRanges = {
    "0-20": 5,
    "21-40": 4,
    "41-60": 3,
    "61-80": 2,
    "81-100": 1,
  };

  const currentRankPrice = rankPrices[currentRank];
  const desiredRankPrice = rankPrices[desiredRank];
  const currentRrMultiplier =
    rrRanges[document.getElementById("current-lp").value];

  if (currentRankPrice >= desiredRankPrice) {
    alert("Desired rank must be higher than the current rank.");
    return;
  }

  const boostPrice =
    (desiredRankPrice - currentRankPrice) * currentRrMultiplier * 10;

  document.getElementById("boostResult").textContent =
    `Стоимость буста: ${boostPrice} $`;
}

document.querySelector(".calculate").addEventListener("click", calculateBoost);
const currentRankButtons = document.querySelectorAll(
  "#currentRankSelection img",
);

for (let i = 0; i < currentRankButtons.length; i++) {
  currentRankButtons[i].addEventListener("click", function () {
    if (
      currentRank &&
      currentRank !== currentRankButtons[i].getAttribute("id")
    ) {
      document
        .querySelector(`#currentRankSelection .rank-image#${currentRank}`)
        .classList.remove("rank-selected");
    }
    currentRank = currentRankButtons[i].getAttribute("id");
    document.querySelector(".order #current-image").src =
      currentRankButtons[i].src;
    document.querySelector(".order #current-image").classList.remove("hidden");
    document
      .querySelector(`#currentRankSelection .rank-image#${currentRank}`)
      .classList.add("rank-selected");
    document.getElementById("rankArrow").classList.remove("hidden");
  });
}

const desiredRankButtons = document.querySelectorAll(
  "#desiredRankSelection img",
);

for (let i = 0; i < desiredRankButtons.length; i++) {
  desiredRankButtons[i].addEventListener("click", function () {
    if (
      desiredRank &&
      desiredRank !== desiredRankButtons[i].getAttribute("id")
    ) {
      document
        .querySelector(`#desiredRankSelection .rank-image#${desiredRank}`)
        .classList.remove("rank-selected");
    }
    desiredRank = desiredRankButtons[i].getAttribute("id");
    document.getElementById("desired-image").src = desiredRankButtons[i].src;
    document.getElementById("desired-image").classList.remove("hidden");
    document
      .querySelector(`#desiredRankSelection .rank-image#${desiredRank}`)
      .classList.add("rank-selected");
    document.getElementById("rankArrow").classList.remove("hidden");
  });
}

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

