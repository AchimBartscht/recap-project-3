//Create prev-button via JS
export function createPrevButton() {
  const prevButton = document.createElement("button");
  prevButton.classList.add("button", "button--prev");
  prevButton.setAttribute("data-js", "button-prev");
  prevButton.textContent = "previous";
  return prevButton;
}

//Create next-button via JS
export function createNextButton() {
  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "button--next");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.textContent = "next";
  return nextButton;
}
