//Create button component via JS
export function createButton(buttonText, buttonModifier, onClick) {
  const Button = document.createElement("button");
  Button.classList.add("button", `button--${buttonModifier}`);
  Button.textContent = buttonText;
  Button.addEventListener("click", onClick);
  return Button;
}
