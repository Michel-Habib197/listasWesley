let display = document.getElementById("display");
let currentInput = "";
let resetNext = false;

function appendNumber(num) {
  if (resetNext) {
    currentInput = "";
    resetNext = false;
  }
  currentInput += num;
  display.textContent = currentInput;
}

function appendOperator(op) {
  if (op === '+/-') {
    if (currentInput) {
      if (currentInput.startsWith("-")) {
        currentInput = currentInput.slice(1);
      } else {
        currentInput = "-" + currentInput;
      }
      display.textContent = currentInput;
    }
    return;
  }
  currentInput += " " + op + " ";
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.textContent = "0";
}

function calculateResult() {
  try {
    let result = eval(currentInput.replace("×", "*"));
    display.textContent = result;
    currentInput = result.toString();
    resetNext = true;
  } catch {
    display.textContent = "Erro";
    currentInput = "";
  }
}
