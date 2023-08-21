//Create button via JS
export function createButton(buttonText, buttonModifier) {
  const Button = document.createElement("button");
  Button.classList.add("button", `button--${buttonModifier}`);
  Button.setAttribute("data-js", `button--${buttonModifier}`);
  Button.textContent = buttonText;
  return Button;
}
