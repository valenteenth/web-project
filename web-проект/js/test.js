const questionElem = document.querySelector("main .test .question");
const answersElem = document.querySelector("main .test .answers");

let data = null;

const test = () => {
  if (data.type === "result") {
    answersElem.innerHTML = "";
    questionElem.innerHTML = data.text;

    const img = document.createElement("img");
    img.src = "img/test/" + data.img + ".jpg";
    answersElem.appendChild(img);
    answersElem.style.justifyContent = "center";
  } else if (data.type === "question") {
    const answers = data.answers;
    questionElem.innerHTML = data.text;

    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    img1.src = "img/test/" + answers[0].img + ".jpg";
    img2.src = "img/test/" + answers[1].img + ".jpg";
    answersElem.innerHTML = "";
    answersElem.appendChild(img1);
    answersElem.appendChild(img2);

    img1.addEventListener("click", () => {
      data = answers[0].next;
      test();
    });

    img2.addEventListener("click", () => {
      data = answers[1].next;
      test();
    });
  }
};

fetch("data/test.json")
  .then((response) => response.json())
  .then((json) => {
    data = json;
    test();
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