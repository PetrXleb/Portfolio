"use strict";

const buttonLang = document.querySelector(".lang");
const elementsToChangeLang = document.getElementsByClassName("changeableLang");

//
//смена языка с анг на русский и наоборот
//
buttonLang.addEventListener("click", () => {
  for (let i = 0; i < elementsToChangeLang.length; i++) {
    if (elementsToChangeLang[i].classList.contains("hidden")) {
      elementsToChangeLang[i].classList.remove("hidden");
    } else {
      elementsToChangeLang[i].classList.add("hidden");
    }
  }
  /* console.log(buttonLang.children[0].alt); */
  if (buttonLang.children[0].alt === "RUS") {
    buttonLang.innerHTML = `
    <img src="media/uk_0.png" alt="ENG"/> `;
  } else {
    buttonLang.innerHTML = `<img src="media/Russia-Flag.png" alt="RUS" />`;
  }
});
