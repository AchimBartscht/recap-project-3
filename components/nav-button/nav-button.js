function createButton() {
  const button = document.createElement("button");
  button.classList.add("button");
  return button;
}

export function createPrevButton() {
  createButton();
  button.classList.add("button--prev");
  button.setAttribute("data-js", "button-prev");
  button.textContent = "previous";
  navigation.append(button);
}

export function createNextButton() {
  createButton();
  button.classList.add("button--next");
  button.setAttribute("data-js", "button-next");
  button.textContent = "next";
  navigation.append(button);
}
