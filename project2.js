let string = "";
let buttons = document.querySelectorAll('.button');
const display = document.querySelector('input');

// Handle button clicks
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    handleInput(e.target.innerHTML);
  });
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
  const validKeys = "0123456789+-*/=";
  if (validKeys.includes(e.key) || e.key === "Enter" || e.key === "Backspace") {
    handleInput(e.key);
  }
});

function handleInput(input) {
  if (input === '=' || input === 'Enter') {
    try {
      string = eval(string);
      display.value = string;
    } catch {
      display.value = "Error";
      string = "";
    }
  } else if (input === 'C' || input === 'Backspace') {
    string = "";
    display.value = string;
  } else if ("0123456789+-*/".includes(input)) {
    string += input;
    display.value = string;
  }
}
