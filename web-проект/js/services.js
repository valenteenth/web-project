$(document).ready(function () {
  $(".box").click(function () {
    var text = $(this).data("text");
    $(".content").text(text);
  });
});
$(document).ready(function () {
  $("#games-amount").on("input", function () {
    var value = $(this).val();
    $("#current-value").text(value);
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
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("joke").addEventListener("click", function() {
      fetch("https://official-joke-api.appspot.com/random_joke")
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              document.getElementById("setup").innerText = data.setup;
              document.getElementById("punchline").innerText = data.punchline;
          })
          .catch(error => {
              console.error("Error fetching joke:", error);
              // Добавим обработку ошибок для пользователя
              document.getElementById("setup").innerText = "Произошла ошибка при загрузке шутки.";
              document.getElementById("punchline").innerText = "";
          });
  });
});