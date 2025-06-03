const items = document.querySelectorAll(".item");
let currentItemIndex = 0;

const totalItems = items.length;
let currentSlide = 0;

function showSlide(index) {
  items.forEach((item) => {
    item.classList.remove("active");
  });

  items[index].classList.add("active");
}
function nextSlide() {
  currentSlide++;
  if (currentSlide >= totalItems) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalItems - 1;
  }
  showSlide(currentSlide);
}
showSlide(currentSlide);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".arrow-1").addEventListener("click", (event) => {
    const targetElement = event.target;

    if (targetElement.classList.contains("prev")) {
      prevSlide();
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".arrow-2").addEventListener("click", (event) => {
    const targetElement = event.target;
    if (targetElement.classList.contains("next")) {
      nextSlide();
    }
  });
});


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